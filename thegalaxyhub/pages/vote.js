import axios from 'axios';
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Devi essere loggato per votare!" });
  }

  // Esempio chiamata a Noctaly (Verifica la documentazione del bot per l'endpoint esatto)
  // Di solito si usa un sistema di Webhook o un'API Key fornita dal bot.
  try {
    const discordId = session.user.id;
    
    // ESEMPIO: Invio XP tramite un webhook di Noctaly o il tuo backend
    /* await axios.post('URL_API_NOCTALY', {
      user_id: discordId,
      amount: 100,
      reason: "Voto su TheGalaxyHub"
    }, { headers: { 'Authorization': 'Bearer TUO_TOKEN' } });
    */

    return res.status(200).json({ success: true, message: "XP Inviati con successo!" });
  } catch (error) {
    return res.status(500).json({ error: "Errore durante l'invio del premio." });
  }
}