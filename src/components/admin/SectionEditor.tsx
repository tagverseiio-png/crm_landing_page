'use client';

import { useState, useEffect, useCallback } from 'react';
import { ref, get, set } from 'firebase/database';
import { db } from '@/lib/firebase';
import { Save, RotateCcw, ChevronDown, ChevronRight, Plus, Trash2, Check, Image as ImageIcon, Upload } from 'lucide-react';

interface SectionEditorProps {
  path: string;
  sectionName: string;
}

export default function SectionEditor({ path, sectionName }: SectionEditorProps) {
  const [data, setData] = useState<any>(null);
  const [originalData, setOriginalData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(db, path));
      if (snapshot.exists()) {
        const val = snapshot.val();
        setData(JSON.parse(JSON.stringify(val)));
        setOriginalData(JSON.parse(JSON.stringify(val)));
      }
    } catch (err) {
      console.error('Error fetching:', err);
    } finally {
      setLoading(false);
    }
  }, [path]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setHasChanges(JSON.stringify(data) !== JSON.stringify(originalData));
  }, [data, originalData]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await set(ref(db, path), data);
      setOriginalData(JSON.parse(JSON.stringify(data)));
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error('Error saving:', err);
      alert('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    setData(JSON.parse(JSON.stringify(originalData)));
  };

  const updateValue = (keyPath: string[], value: any) => {
    setData((prev: any) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let obj = updated;
      for (let i = 0; i < keyPath.length - 1; i++) {
        obj = obj[keyPath[i]];
      }
      obj[keyPath[keyPath.length - 1]] = value;
      return updated;
    });
  };

  const addArrayItem = (keyPath: string[], template: any) => {
    setData((prev: any) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let obj = updated;
      for (let i = 0; i < keyPath.length; i++) {
        obj = obj[keyPath[i]];
      }
      if (Array.isArray(obj)) {
        obj.push(typeof template === 'string' ? '' : JSON.parse(JSON.stringify(template)));
      }
      return updated;
    });
  };

  const removeArrayItem = (keyPath: string[], index: number) => {
    setData((prev: any) => {
      const updated = JSON.parse(JSON.stringify(prev));
      let obj = updated;
      for (let i = 0; i < keyPath.length; i++) {
        obj = obj[keyPath[i]];
      }
      if (Array.isArray(obj)) {
        obj.splice(index, 1);
      }
      return updated;
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-20 text-slate-500">
        <p>No data found at <code className="text-xs bg-slate-800 px-2 py-1 rounded">{path}</code></p>
      </div>
    );
  }

  return (
    <div>
      {/* Sticky save bar */}
      <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between -mx-6 -mt-6 mb-6">
        <div>
          <h2 className="text-xl font-bold text-white">{sectionName}</h2>
          <p className="text-xs text-slate-500 mt-0.5 font-mono">{path}</p>
        </div>
        <div className="flex items-center gap-3">
          {hasChanges && (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Reset
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={!hasChanges || saving}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
              saved
                ? 'bg-emerald-600 text-white'
                : hasChanges
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            {saved ? (
              <><Check className="w-4 h-4" /> Saved!</>
            ) : saving ? (
              <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> Saving...</>
            ) : (
              <><Save className="w-4 h-4" /> Save Changes</>
            )}
          </button>
        </div>
      </div>

      {/* Render fields */}
      <div className="space-y-1">
        <FieldRenderer data={data} keyPath={[]} updateValue={updateValue} addArrayItem={addArrayItem} removeArrayItem={removeArrayItem} />
      </div>
    </div>
  );
}

// Recursive field renderer
function FieldRenderer({
  data,
  keyPath,
  updateValue,
  addArrayItem,
  removeArrayItem,
}: {
  data: any;
  keyPath: string[];
  updateValue: (keyPath: string[], value: any) => void;
  addArrayItem: (keyPath: string[], template: any) => void;
  removeArrayItem: (keyPath: string[], index: number) => void;
}) {
  if (data === null || data === undefined) return null;

  if (typeof data === 'string') {
    const isLongText = data.length > 80;
    return isLongText ? (
      <textarea
        value={data}
        onChange={(e) => updateValue(keyPath, e.target.value)}
        rows={3}
        className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y font-mono"
      />
    ) : (
      <input
        type="text"
        value={data}
        onChange={(e) => updateValue(keyPath, e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    );
  }

  if (typeof data === 'number') {
    return (
      <input
        type="number"
        value={data}
        onChange={(e) => updateValue(keyPath, parseFloat(e.target.value) || 0)}
        className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all max-w-xs"
      />
    );
  }

  if (typeof data === 'boolean') {
    return (
      <button
        onClick={() => updateValue(keyPath, !data)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
          data ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-600/30' : 'bg-slate-800 text-slate-400 border border-slate-700'
        }`}
      >
        {data ? 'True' : 'False'}
      </button>
    );
  }

  if (Array.isArray(data)) {
    return (
      <ArrayField
        data={data}
        keyPath={keyPath}
        updateValue={updateValue}
        addArrayItem={addArrayItem}
        removeArrayItem={removeArrayItem}
      />
    );
  }

  if (typeof data === 'object') {
    return (
      <ObjectField
        data={data}
        keyPath={keyPath}
        updateValue={updateValue}
        addArrayItem={addArrayItem}
        removeArrayItem={removeArrayItem}
      />
    );
  }

  return <span className="text-slate-500 text-sm">{String(data)}</span>;
}

function ObjectField({
  data,
  keyPath,
  updateValue,
  addArrayItem,
  removeArrayItem,
}: {
  data: Record<string, any>;
  keyPath: string[];
  updateValue: (keyPath: string[], value: any) => void;
  addArrayItem: (keyPath: string[], template: any) => void;
  removeArrayItem: (keyPath: string[], index: number) => void;
}) {
  const [collapsed, setCollapsed] = useState(keyPath.length > 2);

  const isSimple = Object.values(data).every(
    (v) => typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean'
  );

  return (
    <div className={`rounded-xl border ${keyPath.length === 0 ? 'border-transparent' : 'border-slate-800 bg-slate-900/40'} ${keyPath.length > 0 ? 'p-4' : ''}`}>
      {keyPath.length > 0 && (
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-3 w-full text-left"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          <span className="capitalize">{keyPath[keyPath.length - 1]?.replace(/([A-Z])/g, ' $1').replace(/[_-]/g, ' ')}</span>
          <span className="text-xs text-slate-600 font-mono ml-auto">{Object.keys(data).length} fields</span>
        </button>
      )}

      {!collapsed && (
        <div className={`space-y-4 ${keyPath.length > 0 ? 'pl-2' : ''}`}>
          {Object.entries(data).map(([key, value]) => {
            const childPath = [...keyPath, key];
            const isPrimitive = typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
            const isImage = key.toLowerCase().includes('image');

            return (
              <div key={key}>
                {isImage ? (
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                    <label className="text-sm font-medium text-slate-400 min-w-[160px] capitalize shrink-0 pt-3">
                      {key.replace(/([A-Z])/g, ' $1').replace(/[_-]/g, ' ')}
                    </label>
                    <div className="flex-1">
                      <ImageUploadField value={value} keyPath={childPath} updateValue={updateValue} />
                    </div>
                  </div>
                ) : isPrimitive ? (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <label className="text-sm font-medium text-slate-400 min-w-[160px] capitalize shrink-0">
                      {key.replace(/([A-Z])/g, ' $1').replace(/[_-]/g, ' ')}
                    </label>
                    <div className="flex-1">
                      <FieldRenderer data={value} keyPath={childPath} updateValue={updateValue} addArrayItem={addArrayItem} removeArrayItem={removeArrayItem} />
                    </div>
                  </div>
                ) : (
                  <FieldRenderer data={value} keyPath={childPath} updateValue={updateValue} addArrayItem={addArrayItem} removeArrayItem={removeArrayItem} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ArrayField({
  data,
  keyPath,
  updateValue,
  addArrayItem,
  removeArrayItem,
}: {
  data: any[];
  keyPath: string[];
  updateValue: (keyPath: string[], value: any) => void;
  addArrayItem: (keyPath: string[], template: any) => void;
  removeArrayItem: (keyPath: string[], index: number) => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const fieldName = keyPath[keyPath.length - 1] || 'items';

  // Check if it's a simple string array
  const isStringArray = data.length > 0 && data.every((item) => typeof item === 'string');

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-3 w-full text-left"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        <span className="capitalize">{fieldName.replace(/([A-Z])/g, ' $1').replace(/[_-]/g, ' ')}</span>
        <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full ml-2">{data.length} items</span>
      </button>

      {!collapsed && (
        <div className="space-y-3 pl-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-3 group">
              <span className="text-xs text-slate-600 font-mono mt-3 min-w-[24px]">{index}</span>
              <div className="flex-1">
                {isStringArray ? (
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => updateValue([...keyPath, String(index)], e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                ) : (
                  <FieldRenderer
                    data={item}
                    keyPath={[...keyPath, String(index)]}
                    updateValue={updateValue}
                    addArrayItem={addArrayItem}
                    removeArrayItem={removeArrayItem}
                  />
                )}
              </div>
              <button
                onClick={() => removeArrayItem(keyPath, index)}
                className="mt-2 p-1.5 rounded-lg text-slate-600 hover:text-red-400 hover:bg-red-500/10 transition-colors opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            onClick={() => addArrayItem(keyPath, data.length > 0 ? data[0] : '')}
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors mt-2"
          >
            <Plus className="w-4 h-4" /> Add item
          </button>
        </div>
      )}
    </div>
  );
}

function ImageUploadField({
  value,
  keyPath,
  updateValue,
}: {
  value: string;
  keyPath: string[];
  updateValue: (keyPath: string[], val: any) => void;
}) {
  const [gallery, setGallery] = useState<string[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      const snap = await get(ref(db, 'media/images'));
      if (snap.exists()) {
        setGallery(snap.val() || []);
      }
    };
    fetchGallery();
  }, []);

  const saveGallery = async (newGallery: string[]) => {
    setGallery(newGallery);
    await set(ref(db, 'media/images'), newGallery);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setLoadingGallery(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64String = event.target?.result as string;
      const newGallery = [...gallery, base64String];
      await saveGallery(newGallery);
      updateValue(keyPath, base64String);
      setLoadingGallery(false);
    };
    reader.readAsDataURL(file);
  };

  const deleteImage = async (img: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newGallery = gallery.filter((i) => i !== img);
    await saveGallery(newGallery);
    if (value === img) {
      updateValue(keyPath, '');
    }
  };

  return (
    <div className="w-full bg-slate-800/40 border border-slate-700/80 rounded-xl overflow-hidden transition-all focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <div className="p-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
        {/* Current Selection Preview */}
        <div 
          className="w-32 h-24 bg-slate-900 rounded-lg overflow-hidden shrink-0 border border-slate-700 flex items-center justify-center relative group cursor-pointer"
          onClick={() => setShowGallery(!showGallery)}
          title="Click to browse gallery"
        >
          {value ? (
            <img src={value} alt="Preview" className="w-full h-full object-cover" />
          ) : (
            <ImageIcon className="w-8 h-8 text-slate-600" />
          )}
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] text-white font-medium uppercase tracking-wider">Browse</span>
          </div>
        </div>
        
        {/* String input fallback */}
        <div className="flex-1 w-full space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-500 font-medium">Image Source (URL or Base64)</p>
            <label className="flex items-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg transition-colors">
              {loadingGallery ? (
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <Upload className="w-3 h-3" />
              )}
              Upload New
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => updateValue(keyPath, e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 truncate"
            placeholder="https://... or data:image/..."
          />
        </div>
      </div>
      
      {/* Gallery Selector */}
      {showGallery && (
        <div className="border-t border-slate-700/80 p-4 bg-slate-900/50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Media Gallery</h4>
            <span className="text-xs text-slate-500">{gallery.length} images</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative group aspect-video rounded-md overflow-hidden border-2 cursor-pointer transition-all ${value === img ? 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' : 'border-slate-700 hover:border-slate-500'}`}
                onClick={() => updateValue(keyPath, img)}
              >
                <img src={img} alt={`Gallery item ${idx}`} className="w-full h-full object-cover" />
                <button 
                  onClick={(e) => deleteImage(img, e)}
                  className="absolute top-1 right-1 p-1 bg-red-600 hover:bg-red-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  title="Delete image"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
                {value === img && (
                  <div className="absolute inset-0 border-[3px] border-blue-500 rounded-md pointer-events-none"></div>
                )}
              </div>
            ))}
            {gallery.length === 0 && (
              <div className="col-span-full py-6 text-center text-slate-500 text-xs italic">
                No images in gallery yet. Upload one to get started!
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

