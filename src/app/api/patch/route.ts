import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { ref, get, set } from 'firebase/database';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const snapshot = await get(ref(db, 'landing/cards'));
    if (snapshot.exists()) {
      const cards = snapshot.val();
      const defaultImages = [
        "/feature_lead.png",
        "/feature_whatsapp.png",
        "/feature_invoice.png",
        "/feature_dossier.png",
        "/feature_kanban.png",
        "/feature_analytics.png"
      ];
      for (let i = 0; i < cards.length; i++) {
        if (!cards[i].image) {
           cards[i].image = defaultImages[i] || "";
        }
      }
      await set(ref(db, 'landing/cards'), cards);
      return NextResponse.json({ success: true, cards });
    }
    return NextResponse.json({ success: false, message: 'No cards found' });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
