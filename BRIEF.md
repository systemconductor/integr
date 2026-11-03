# INTEGR Website Brief

**Status:** Interviewed brief, based on user-provided direction and supplied brand assets.
**Company:** Integr / official external spelling: INTEGR
**Slogan:** O Futuro Tem Origem
**Primary language:** Portuguese
**Build intent:** Premium scroll-driven company website for a software engineering agency.

## 1. Vibe and references

**User-provided direction:** Software Engineering Agency focused on delivering Company Systems with AI, building with trust and honesty and providing the correct steps towards the company's growth.

**Brand territory from the supplied manual:** Retro-futurist industrial computing, contemporary rather than nostalgic imitation.

**Chosen range:** Retro editorial, technical e expressivo.

**Visual inputs:** Supplied INTEGR logo, brand manual, curved orange/amber graphic assets, and architectural/workplace concept imagery.

## 2. Scroll journey

**User choice:** Use this reference journey:

1. Recognize a business problem.
2. Understand INTEGR's approach.
3. See areas of work.
4. Understand the method and trust principles.
5. Speak with INTEGR.

The sequence will be expressed as distinct narrative chapters, not one continuous world.

## 3. Energy curve

**User choice:** Começar contemplativa, crescer em intensidade e terminar com confiança.

Working curve:
- Opening: calm, architectural, origin and credibility.
- Problem: focused tension, complexity made visible without alarmism.
- Approach: technical clarity and rising motion.
- Capabilities: highest visual intensity, systems and AI becoming structured.
- Method: slower, precise, trustworthy.
- Close: confident, warm, direct invitation to speak with INTEGR.

## 4. Feeling curve and peak

- Recognition: grounded and curious, caused by a quiet architectural opening and the origin story.
- Tension: alert but understood, caused by complexity resolving into visible system relationships.
- Turn: relief and possibility, caused by INTEGR's approach changing the visual state.
- Substance: impressed and oriented, caused by a technical system drawing assembling as the visitor scrolls.
- Trust: secure and respected, caused by explicit method, honesty, and correct next steps.
- Commitment: confident, caused by a clear invitation to speak with INTEGR.

**Peak:** “Foi aqui que a visão da Integr virou um sistema vivo diante dos meus olhos.”

**Peak act:** Substance / capabilities.

## 5. Signature move

**User choice:** Um desenho técnico da solução Integr se constrói conforme o visitante navega.

Implementation direction: a bespoke SVG systems drawing progressively builds as the visitor scrolls. It will show relationships between company context, systems, data, AI, and operational growth. It must be real semantic SVG markup, not an image with baked-in text.

## 6. Visitor belief

**User choice:** A Integr é o parceiro técnico correto para estruturar o crescimento da empresa.

## 7. Primary action

**User choice:** Falar com a Integr.

Use one consistent CTA label across the page.

## 8. World structure

**User choice:** Cenas distintas, como capítulos de uma narrativa.

Recommended art direction: architectural photographic world using the supplied workplace and reception concepts, combined with the official triple-stack stripe motif and technical drawing language. Use hard chapter changes where the story changes. Do not treat AI-generated interior concepts as photographs of completed facilities.

## 9. Assets already available

- `integr_company_logo.png`
- `INTEGR_Brand_Identity_and_Environmental_Manual_v2.pdf`
- Curved orange/amber graphic backgrounds
- Retro-futurist identity explorations
- Executive office, office, lobby, reception, wall, and headquarters concept images

Hard brand rules extracted from the manual:
- Official name is INTEGR. Historical “inteqr” renders must not be published with that spelling.
- Official slogan concept: “O futuro tem origem.”
- Core palette: Archive Cream `#CEAD86`, Signal Amber `#D27836`, Industrial Orange `#B74521`, Interface Ivory `#EEE6D6`, Terminal Black `#170F07`.
- Triple-stack sequence: `#CEAD86` → `#D27836` → `#B74521`.
- KVANT is the designated logo typeface. Space Grotesk is the proposed display/editorial typeface. IBM Plex Mono is the proposed technical companion.
- The manual states that concept interiors are AI-generated visual concepts, not photographs or approved construction drawings.

## 10. Tell-someone sentence

It's the site where a software engineering agency turns business complexity into a visible, trustworthy system for growth, and the system draws itself as you move through the story.

## 11. Authored silence

No scroll cue, mouse icon, or “scroll to explore” instruction. The page should trust the visitor's native scrolling behavior.

## 12. Initial technical direction

Astro + TypeScript, static-first. Use Astro components and native TypeScript scripts for the scroll experience. Add a framework island only if a later interaction genuinely requires one. Use Astro's built-in image pipeline for local assets in `src/`, semantic HTML, reduced-motion behavior, and a static deployment target compatible with the existing Caddy-served VPS architecture.
