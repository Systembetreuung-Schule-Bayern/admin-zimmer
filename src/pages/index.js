import React from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  // Leitet Besucher sofort zu deiner ersten echten Markdown-Datei weiter
  return <Redirect to="/admin-zimmer/1-1-start" />;
}