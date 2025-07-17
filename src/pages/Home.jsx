import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen p-6 md:p-12">
      <section className="text-3xl md:text-5xl font-bold mb-6">
        <p>$ whoami</p>
        <p className="mt-2">x1kuting — SOC Analyst | Ethical Hacker</p>
      </section>

      <section className="text-lg max-w-2xl mb-10">
        <p>
          I am Nure Alam Ziku, a passionate SOC Analyst focused on real-time threat detection, log analysis, and incident response.
          Welcome to my cyber portfolio.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <li>Splunk</li>
          <li>Wazuh</li>
          <li>MITRE ATT&CK</li>
          <li>Python & Bash</li>
          <li>TryHackMe / HTB</li>
          <li>Wireshark</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-green-300">Projects will be added here soon. Stay tuned!</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc pl-5">
          <li>TryHackMe Cyber Defence Path</li>
          <li>Google Cybersecurity Professional</li>
          <li>Splunk Core Certified User</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">CTFs & Labs</h2>
        <p>Team: BADR_313 | Platforms: TryHackMe, Hack The Box</p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:nurealamziku657@gmail.com" className="underline">nurealamziku657@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/nure-alom-ziku-319065292" target="_blank" className="underline">nure-alom-ziku</a></p>
      </section>
    </main>
  );
}