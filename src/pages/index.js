import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  // Leitet Besucher jetzt direkt auf deine neue allgemeine Infoseite weiter
  return <Redirect to="/admin-zimmer/docs/0-0-startseite" />;
}