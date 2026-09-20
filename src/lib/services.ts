export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  /** Short card / meta summary. Unique per service. */
  short: string;
  intro: string;
  bullets: string[];
  best: string;
  image: "metallic" | "flake" | "solid" | "sealed";
  group: "Epoxy Systems" | "Concrete Work" | "Commercial & Industrial" | "Specialty Floors";
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "epoxy-floor-coatings",
    title: "Epoxy Floor Coatings",
    short:
      "Resin coatings that bond into a properly ground slab and shrug off traffic, oil, and hot tires.",
    intro:
      "An epoxy floor coating is two parts resin and hardener that cure into one solid, non-porous layer over your concrete. Done right, the bond starts with the prep: we diamond grind the slab open so the resin keys into the concrete instead of sitting on top of it, which is the single biggest reason coatings either last a decade or peel in a year.",
    bullets: [
      "Diamond-ground prep on every slab, no acid etching shortcuts",
      "Coating thickness matched to how hard the floor gets worked",
      "Seamless surface with nothing for dirt or moisture to sit in",
      "Colour, flake, and gloss level chosen with you before we start",
    ],
    best: "Garages, basements, shops, and any slab that needs a hard-wearing finish.",
    image: "solid",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "How long before I can park on a new epoxy coating?",
        a: "Light foot traffic is usually fine the next day. Vehicles should stay off for about 72 hours so the coating reaches full chemical cure, a little longer in cold weather.",
      },
      {
        q: "Will epoxy stick to an old painted floor?",
        a: "Not reliably. We grind old paint and sealers off first, because a new coating is only as strong as whatever it is bonded to underneath.",
      },
    ],
  },
  {
    slug: "epoxy-flooring",
    title: "Epoxy Flooring",
    short:
      "Full epoxy floor installations for Surrey homes and businesses, from prep and repair through top coat.",
    intro:
      "Epoxy flooring covers the whole job, not just the coating: assessing the slab, grinding it flat and open, repairing what is broken, then building the system up in layers. We walk your space first, tell you honestly what the concrete can support, and quote the system that actually fits how you use the room.",
    bullets: [
      "Free on-site assessment before any number is quoted",
      "Crack, spall, and low-spot repair included in the build",
      "Moisture testing on slabs where vapour is a risk",
      "One crew from grinding to final walkthrough",
    ],
    best: "Homeowners and businesses who want the floor handled start to finish.",
    image: "metallic",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "How long does a typical epoxy floor take?",
        a: "Most two-car garages are done in one to two days on site. Larger commercial floors are scheduled in sections so you keep part of the space usable.",
      },
      {
        q: "Do you work in winter?",
        a: "Yes. We use products rated for lower temperatures and heat enclosed spaces when needed, though cure times stretch out a little.",
      },
    ],
  },
  {
    slug: "commercial-epoxy-flooring",
    title: "Commercial Epoxy Flooring",
    short:
      "Hard-wearing epoxy for retail, showrooms, clinics, and shops that need to look sharp under daily traffic.",
    intro:
      "Commercial floors get judged twice: by customers who see them and by staff who work on them. We build systems that handle carts, heels, spills, and scrubbing without hazing or lifting, and we schedule the work around your hours so the doors stay open where possible.",
    bullets: [
      "Evening and weekend installs to protect trading hours",
      "Finishes that hold gloss under repeated scrubbing",
      "Slip-resistant additives for entryways and wet zones",
      "Sectioned scheduling so part of the space stays open",
    ],
    best: "Retail floors, showrooms, clinics, gyms, and service counters.",
    image: "metallic",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Can you install after hours?",
        a: "Most of our commercial work happens evenings and weekends. We plan the cure window around your opening time so nothing gets walked on early.",
      },
      {
        q: "How do we clean it day to day?",
        a: "A neutral-pH cleaner and a soft mop or auto-scrubber is all it needs. Avoid harsh solvents, which dull the top coat over time.",
      },
    ],
  },
  {
    slug: "residential-epoxy-flooring",
    title: "Residential Epoxy Flooring",
    short:
      "Clean, warm, easy-to-mop floors for garages, basements, laundry rooms, and hobby spaces at home.",
    intro:
      "At home the floor has to be practical and pleasant to look at. We keep the site tidy, run dust extraction on the grinders so your house is not coated in concrete powder, and finish with a surface you can mop in five minutes instead of sweeping forever.",
    bullets: [
      "Dust-extracted grinding to keep the rest of the house clean",
      "Colour and flake blends chosen from physical samples",
      "Warm, bright finish that lifts a dark basement or garage",
      "Protective masking on walls, doors, and thresholds",
    ],
    best: "Garages, basements, laundry rooms, gyms, and workshops at home.",
    image: "flake",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "Will the install make a mess inside my house?",
        a: "Grinders run on vacuum extraction and we mask off doorways, so dust stays in the work area. Most homeowners stay in the house through the job.",
      },
      {
        q: "Does it smell?",
        a: "Low-odour systems are our default for interior rooms. Any smell clears within a day of ventilation.",
      },
    ],
  },
  {
    slug: "garage-epoxy-flooring",
    title: "Garage Epoxy Flooring",
    short:
      "Hot-tire-resistant garage floors that stop dusting, resist road salt, and wipe clean after a winter drive.",
    intro:
      "A garage slab takes hot tires, road salt, dropped tools, and winter slush. A properly built garage floor handles all four. We grind, repair the control joints and spalls, then lay a flake or solid system with a top coat rated for hot-tire pickup so the coating does not lift where your wheels sit.",
    bullets: [
      "Hot-tire pickup resistance built into the top coat",
      "Road salt and de-icer resistant surface",
      "Control joints and spalls repaired before coating",
      "Optional anti-slip grit near the garage door",
    ],
    best: "Single, double, and triple garages, plus detached shops.",
    image: "flake",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "Why did my last garage floor peel under the tires?",
        a: "Almost always poor prep or a coating not rated for hot-tire pickup. Grinding plus a polyaspartic top coat solves both.",
      },
      {
        q: "Can you coat right up to the garage door?",
        a: "Yes, we finish to a clean edge at the threshold and can add extra grit there where rain blows in.",
      },
    ],
  },
  {
    slug: "industrial-epoxy-flooring",
    title: "Industrial Epoxy Flooring",
    short:
      "Heavy-build epoxy for plants and shops facing forklifts, pallet jacks, chemicals, and constant load.",
    intro:
      "Industrial slabs live a hard life. We specify build thickness by load and traffic type, not by square footage, and we can add chemical-resistant or thermal-shock-tolerant layers where the process demands it. Line striping and safety markings go down as part of the same install.",
    bullets: [
      "Heavy-build systems specified by load and traffic",
      "Chemical and oil resistance for process areas",
      "Safety line striping, walkways, and hazard markings",
      "Phased installs that keep production moving",
    ],
    best: "Manufacturing floors, machine shops, plants, and equipment bays.",
    image: "solid",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Can you coat around live equipment?",
        a: "Yes. We phase the floor in bays and mask machinery so lines keep running while the rest of the slab is done.",
      },
      {
        q: "Will it hold up to forklifts?",
        a: "A correctly specified heavy-build system handles forklift and pallet-jack traffic. We size the build after seeing the actual loads.",
      },
    ],
  },
  {
    slug: "metallic-epoxy-flooring",
    title: "Metallic Epoxy Flooring",
    short:
      "High-gloss floors with marbled pigment movement, so no two installs ever come out the same.",
    intro:
      "Metallic pigments drift through the resin while it cures, which is why a metallic floor has depth you cannot print or tile. We blend the colours on site, control the movement with heat and technique, and seal it under a clear coat that keeps the shine without yellowing.",
    bullets: [
      "One-of-a-kind marbled colour movement",
      "Mirror-gloss, satin, or matte clear top coats",
      "UV-stable clears for rooms with big windows",
      "Custom colour blends matched to your interior",
    ],
    best: "Showrooms, feature garages, retail floors, and finished basements.",
    image: "metallic",
    group: "Specialty Floors",
    faqs: [
      {
        q: "Can I see the pattern before you pour it?",
        a: "We make sample boards in your chosen colours. The exact movement is unique to the install, but the boards show the character accurately.",
      },
      {
        q: "Is a high-gloss metallic floor slippery?",
        a: "It can be when wet, so we add a fine anti-slip additive to the clear coat in any area that sees water.",
      },
    ],
  },
  {
    slug: "flake-epoxy-flooring",
    title: "Flake Epoxy Flooring",
    short:
      "Vinyl chip floors with a light texture that hides dust, grit, and the small flaws in an older slab.",
    intro:
      "Flake systems broadcast vinyl chips into a wet base coat, then lock them under a clear coat. The chips add texture underfoot, disguise dirt between cleans, and camouflage the minor imperfections every older slab has. It is the most forgiving finish we install, which is why most garages end up here.",
    bullets: [
      "Slip-resistant texture straight out of the chip",
      "Hides dust and small slab imperfections",
      "Dozens of chip blends, or a custom mix",
      "Fast-cure options that return the space next day",
    ],
    best: "Family garages, basements, utility rooms, and workshops.",
    image: "flake",
    group: "Specialty Floors",
    faqs: [
      {
        q: "Is a flake floor hard to sweep?",
        a: "No. The texture is fine enough that a broom or mop clears it easily, but coarse enough to be safe when wet.",
      },
      {
        q: "Can I pick a blend to match my walls?",
        a: "Yes, we carry a wide chip range and can mix a custom blend to sit with your paint and cabinets.",
      },
    ],
  },
  {
    slug: "quartz-epoxy-flooring",
    title: "Quartz Epoxy Flooring",
    short:
      "Coloured quartz aggregate broadcast into resin for a dense, grippy, sanitary floor that takes abuse.",
    intro:
      "Quartz systems use coloured, kiln-fired sand instead of vinyl chips. The result is heavier, denser, and far more slip-resistant than a standard coating, and it cleans down to a sanitary surface. It is the system health inspectors and facility managers ask for by name.",
    bullets: [
      "Dense double-broadcast build for heavy use",
      "Excellent wet slip resistance",
      "Sanitary, non-absorbent, easy to disinfect",
      "Integral coved bases available at walls",
    ],
    best: "Kitchens, wash bays, labs, locker rooms, and food handling areas.",
    image: "solid",
    group: "Specialty Floors",
    faqs: [
      {
        q: "How is quartz different from flake?",
        a: "Quartz is a heavier, sharper aggregate. It builds a thicker, grippier, more sanitary floor, where flake is lighter and more decorative.",
      },
      {
        q: "Can you cove it up the wall?",
        a: "Yes. An integral cove removes the wall-floor joint so there is nowhere for water or bacteria to collect.",
      },
    ],
  },
  {
    slug: "stone-epoxy-flooring",
    title: "Stone Epoxy Flooring",
    short:
      "Natural river stone set in clear resin for a textured, permeable-looking finish with real character.",
    intro:
      "Stone epoxy sets washed natural pebble into a clear resin matrix, giving you the look of loose river rock with a solid, walkable surface. It handles outdoor temperature swings well and reads far warmer than a poured coating, which makes it popular for patios and entries.",
    bullets: [
      "Natural stone colour, not a printed pattern",
      "Textured surface that stays grippy outdoors",
      "Handles Lower Mainland freeze-thaw cycles",
      "Blends chosen from real stone samples",
    ],
    best: "Patios, entryways, pool surrounds, and covered walkways.",
    image: "sealed",
    group: "Specialty Floors",
    faqs: [
      {
        q: "Does water drain through it?",
        a: "We can build it permeable over a suitable base, or fully sealed over concrete. Which one we use depends on your drainage.",
      },
      {
        q: "Will the stone come loose?",
        a: "Not when the resin ratio and compaction are right. Loose stone is a symptom of a rushed install, not the system.",
      },
    ],
  },
  {
    slug: "polyaspartic-floor-coatings",
    title: "Polyaspartic Floor Coatings",
    short:
      "Fast-cure, UV-stable coatings that go down in a day and stay clear instead of ambering in sunlight.",
    intro:
      "Polyaspartic cures in hours rather than days, tolerates cold better than epoxy, and does not yellow under UV. That combination makes it our default top coat over flake and our go-to when a space simply cannot be closed for three days.",
    bullets: [
      "Same-day or next-day return to service",
      "UV stable, so light colours stay true",
      "Cures reliably in cold Lower Mainland weather",
      "Tougher scratch resistance than standard epoxy",
    ],
    best: "Garages, shops, and any floor that needs to be back in use fast.",
    image: "flake",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "Is polyaspartic better than epoxy?",
        a: "It is better as a top coat: faster, clearer, tougher. Epoxy is still the stronger base layer, so most good floors use both.",
      },
      {
        q: "Can it really be finished in one day?",
        a: "On a sound slab, yes. Grinding, base, broadcast, and clear can all happen in a single working day.",
      },
    ],
  },
  {
    slug: "polyurethane-floor-coatings",
    title: "Polyurethane Floor Coatings",
    short:
      "Flexible, abrasion-resistant top coats that absorb impact and keep their finish under constant scuffing.",
    intro:
      "Polyurethane stays slightly flexible after cure, so it absorbs impact and movement that would chip a rigid coating. Over an epoxy base it adds abrasion and chemical resistance, and it holds a consistent sheen in spaces that get scrubbed hard and often.",
    bullets: [
      "Flexible film that resists chipping and impact",
      "Strong abrasion resistance in high-traffic lanes",
      "Consistent sheen under aggressive cleaning",
      "Available in matte through to full gloss",
    ],
    best: "Corridors, production areas, loading zones, and busy back-of-house floors.",
    image: "solid",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "When would you recommend urethane over polyaspartic?",
        a: "Where impact and heavy scrubbing matter more than turnaround speed. Urethane's flexibility is its advantage.",
      },
      {
        q: "Can it go over my existing epoxy?",
        a: "If the existing coating is sound and well bonded, we abrade it and recoat. If it is lifting anywhere, it comes off first.",
      },
    ],
  },
  {
    slug: "concrete-floor-coatings",
    title: "Concrete Floor Coatings",
    short:
      "Protective coating systems chosen around your slab's condition, moisture level, and daily workload.",
    intro:
      "Not every concrete floor wants the same coating. A damp slab needs a moisture-tolerant primer, a cracked one needs structural repair first, and a lightly used storage floor does not need a heavy build. We test, then specify, rather than selling one system to every customer.",
    bullets: [
      "Moisture testing before the system is specified",
      "Primer chosen to suit the slab, not the schedule",
      "Options from light-duty seal to heavy-build coating",
      "Honest advice when a cheaper system will do",
    ],
    best: "Any concrete slab that needs protecting, indoors or under cover.",
    image: "sealed",
    group: "Concrete Work",
    faqs: [
      {
        q: "How do you know if my slab has a moisture problem?",
        a: "We run a calcium chloride or relative humidity test. If vapour is moving up through the slab, we prime for it instead of hoping.",
      },
      {
        q: "What if my floor is already coated?",
        a: "We test adhesion in a few spots. Sound coatings get abraded and recoated; failing ones get ground off.",
      },
    ],
  },
  {
    slug: "concrete-floor-sealing",
    title: "Concrete Floor Sealing",
    short:
      "Clear penetrating and film sealers that stop dusting and staining while keeping the raw concrete look.",
    intro:
      "Sealing is the economical way to protect a sound slab you actually like the look of. A penetrating sealer soaks in and blocks water and stains from below the surface; a film sealer adds sheen and easier cleaning on top. We will tell you which one your floor needs.",
    bullets: [
      "Keeps the natural concrete appearance",
      "Stops surface dusting and efflorescence",
      "Matte, satin, or gloss film options",
      "Cost-effective across large square footage",
    ],
    best: "Driveways, carports, storage areas, and large plain slabs.",
    image: "sealed",
    group: "Concrete Work",
    faqs: [
      {
        q: "How often does a sealed floor need redoing?",
        a: "Penetrating sealers often last five years or more. Film sealers in traffic lanes usually want a refresh every two to three years.",
      },
      {
        q: "Will sealing darken my concrete?",
        a: "Film sealers deepen the colour slightly, a bit like wetting the slab. Penetrating sealers leave the tone almost unchanged.",
      },
    ],
  },
  {
    slug: "concrete-resurfacing",
    title: "Concrete Resurfacing",
    short:
      "A new wear surface over tired concrete, so you get a flat, sound floor without demolition costs.",
    intro:
      "If your slab is structurally fine but the surface is worn, pitted, or patched badly, resurfacing rebuilds the top rather than replacing everything underneath. We grind, repair, then trowel down a cementitious overlay that gives you a fresh, flat surface ready to coat or leave exposed.",
    bullets: [
      "Avoids the cost and downtime of a full tear-out",
      "Levels out pitting, patches, and shallow damage",
      "Ready to accept a coating or a sealer afterwards",
      "Feathered edges at doorways and transitions",
    ],
    best: "Worn garage slabs, patios, and commercial floors with surface damage only.",
    image: "sealed",
    group: "Concrete Work",
    faqs: [
      {
        q: "Can resurfacing fix a cracked slab?",
        a: "It fixes surface damage. Moving structural cracks need repair and sometimes a joint detail first, or they telegraph through.",
      },
      {
        q: "How thick is an overlay?",
        a: "Typically a few millimetres up to around a centimetre, depending on how much correction the floor needs.",
      },
    ],
  },
  {
    slug: "concrete-repairs",
    title: "Concrete Repairs",
    short:
      "Crack, spall, and joint repair done properly, because no coating outlives the concrete beneath it.",
    intro:
      "Repairs are where coating jobs are won or lost. We chase cracks out and fill them with semi-rigid resin rather than smearing patch over the top, rebuild broken edges and spalls, and re-cut control joints so movement has somewhere to go instead of tearing your new floor.",
    bullets: [
      "Cracks chased, cleaned, and resin-filled",
      "Spalled edges and pitting rebuilt flush",
      "Control joints honoured, not coated over blindly",
      "Low spots levelled before any coating goes down",
    ],
    best: "Any slab with cracking, pitting, spalling, or failed patches.",
    image: "sealed",
    group: "Concrete Work",
    faqs: [
      {
        q: "Will the crack show through the finished floor?",
        a: "On a static crack, no. On a moving joint we keep it as a joint, because forcing a coating across it guarantees a new crack.",
      },
      {
        q: "Do you do repairs without coating afterwards?",
        a: "Yes, we take standalone repair work on slabs you just want made safe and sound.",
      },
    ],
  },
  {
    slug: "commercial-floor-coatings",
    title: "Commercial Floor Coatings",
    short:
      "Durable, presentable coatings for business floors, installed on a schedule that respects your operations.",
    intro:
      "Commercial coating work is as much about logistics as chemistry. We stage the floor in sections, keep exits and paths clear, and pick products with cure windows that fit your closure. You get a floor that looks professional and a job that did not cost you a week of trading.",
    bullets: [
      "Section-by-section installs to limit downtime",
      "Fast-cure products where closures are tight",
      "Clear, itemised quotes with no surprise extras",
      "WCB-covered crews and clean site handover",
    ],
    best: "Offices, retail units, showrooms, clinics, and back-of-house areas.",
    image: "metallic",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "How much disruption should we plan for?",
        a: "For most units, one to three days in staged sections. We give you a written sequence before starting so you can plan staff and deliveries.",
      },
      {
        q: "Do you carry insurance and WCB?",
        a: "Yes, and we are happy to send certificates to your property manager before the job.",
      },
    ],
  },
  {
    slug: "restaurant-floor-coatings",
    title: "Restaurant Floor Coatings",
    short:
      "Seamless, grease-resistant floors for dining rooms, prep lines, and dish pits that pass inspection.",
    intro:
      "Restaurant floors deal with grease, hot water, dropped glass, and a health inspector. We install seamless systems with coved bases and real slip resistance, and we do the work overnight so service is not interrupted. No grout lines means nowhere for grease to build up.",
    bullets: [
      "Seamless surface with no grout lines to scrub",
      "Grease and hot-water resistant build",
      "Coved bases for a sealed wall-to-floor junction",
      "Overnight installs between service days",
    ],
    best: "Dining rooms, prep areas, dish pits, bars, and walk-in surrounds.",
    image: "solid",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Can you do the work between Sunday close and Tuesday open?",
        a: "That window is our most common restaurant schedule. Fast-cure systems make it realistic on most floor sizes.",
      },
      {
        q: "Will it pass a health inspection?",
        a: "Seamless, non-porous, coved, and slip-resistant is exactly what inspectors look for in a food service floor.",
      },
    ],
  },
  {
    slug: "commercial-kitchen-floor-coatings",
    title: "Commercial Kitchen Floor Coatings",
    short:
      "Thermal-shock tolerant kitchen floors built for boiling spills, heavy grease, and daily deep cleaning.",
    intro:
      "A commercial kitchen floor gets boiling water in the morning and a caustic degreaser at night. We use urethane cement and quartz systems built for thermal shock, sloped correctly to drains, with coved bases so the mop line has nowhere to hide.",
    bullets: [
      "Thermal-shock resistant urethane cement systems",
      "Correct falls to floor drains and trench grates",
      "Aggressive slip resistance in grease zones",
      "Stands up to caustic and degreaser cleaning",
    ],
    best: "Commercial kitchens, bakeries, butcheries, and cook lines.",
    image: "solid",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Why not just tile a kitchen floor?",
        a: "Tile grout absorbs grease and cracks under thermal shock. A seamless resin floor removes both problems.",
      },
      {
        q: "Can you fix the drainage falls at the same time?",
        a: "Yes. We can build falls into the system so water actually reaches the drain instead of pooling.",
      },
    ],
  },
  {
    slug: "food-safe-floor-coatings",
    title: "Food-Safe Floor Coatings",
    short:
      "Non-porous, HACCP-friendly floors for food processing spaces that get washed down every single shift.",
    intro:
      "Food-safe means more than easy to clean. We install non-porous, chemically resistant systems with sealed coving and no seams for bacteria to colonise, using products suited to wash-down environments and documented for your food safety plan.",
    bullets: [
      "Non-porous, seamless, wash-down ready",
      "Coved bases and sealed penetrations",
      "Chemically resistant to sanitisers and acids",
      "Product documentation for your HACCP file",
    ],
    best: "Food processing rooms, cold storage, breweries, and packing floors.",
    image: "solid",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Do you supply product data for our audit?",
        a: "Yes, we hand over the technical and safety data sheets for every product used on your floor.",
      },
      {
        q: "Can it handle daily pressure washing?",
        a: "The systems we specify for wash-down areas are built for exactly that, including hot water and sanitiser cycles.",
      },
    ],
  },
  {
    slug: "warehouse-floor-coatings",
    title: "Warehouse Floor Coatings",
    short:
      "Large-area coatings with line marking, built for forklifts, racking loads, and constant pallet traffic.",
    intro:
      "Warehouse floors need to survive point loads, turn wear from forklifts, and pallets dragged where they should not be. We coat large areas efficiently, mark aisles and pedestrian walkways as part of the same visit, and phase the work so racking never has to come fully offline.",
    bullets: [
      "Efficient coverage across large square footage",
      "Aisle, walkway, and hazard line marking included",
      "Wear-rated build at forklift turning points",
      "Phased around racking and shipping schedules",
    ],
    best: "Distribution centres, storage warehouses, and logistics floors.",
    image: "solid",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Do we have to empty the warehouse?",
        a: "No. We work in bays and coordinate with your team so stock moves once, not repeatedly.",
      },
      {
        q: "Can you add safety line marking?",
        a: "Yes, walkways, aisles, hazard zones, and bay numbers are all done in coating rather than tape.",
      },
    ],
  },
  {
    slug: "parkade-floor-coatings",
    title: "Parkade Floor Coatings",
    short:
      "Waterproof traffic coatings that protect structural decks from road salt, water, and freeze-thaw damage.",
    intro:
      "A parkade deck is structure, not just floor. Water and chloride getting through to the rebar is what eventually costs a strata six figures. We install waterproof traffic-deck systems with the right membrane build, detail the joints and drains, and mark stalls and directions afterwards.",
    bullets: [
      "Waterproof traffic-deck membrane systems",
      "Chloride protection for the structural slab",
      "Joint, drain, and upstand detailing done properly",
      "Stall lines, arrows, and numbering included",
    ],
    best: "Strata parkades, underground garages, and ramp decks.",
    image: "solid",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Can residents keep parking during the work?",
        a: "We coat in phases and publish a stall schedule so only one section is closed at a time.",
      },
      {
        q: "Do you handle the ramps too?",
        a: "Yes, ramps get an extra-grip build because that is where tyres scrub hardest and water runs fastest.",
      },
    ],
  },
  {
    slug: "garage-floor-coatings",
    title: "Garage Floor Coatings",
    short:
      "Coating options for every garage budget, from a clean sealed slab to a full flake and polyaspartic build.",
    intro:
      "Not every garage needs the top system. We will walk yours, ask how you actually use it, and lay out the honest options: a sealer to stop the dusting, a solid colour for a workshop, or a full flake build for a space you want to show off. Same prep standard on all three.",
    bullets: [
      "Clear options at three price points, no pressure",
      "Same grinding and repair standard on every build",
      "Anti-slip and hot-tire resistance where needed",
      "Most jobs finished in one or two days",
    ],
    best: "Attached garages, detached shops, and multi-bay driveways.",
    image: "flake",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "What does a two-car garage usually cost?",
        a: "It depends on slab condition and system, which is why we quote on site for free rather than guessing over the phone.",
      },
      {
        q: "Do you move the contents out?",
        a: "We ask that the floor is clear on the day. If shelving is fixed, we work around and mask it.",
      },
    ],
  },
  {
    slug: "concrete-patio-flooring",
    title: "Concrete Patio Flooring",
    short:
      "Outdoor patio finishes with real grip and UV stability, built for Lower Mainland rain and freeze-thaw.",
    intro:
      "Outdoor concrete needs UV-stable products and a surface that is still safe in the rain, which rules out most indoor coatings. We use textured, UV-stable systems and detail the edges and drainage so water leaves the patio instead of sitting on it through a wet Surrey winter.",
    bullets: [
      "UV-stable finishes that will not amber outdoors",
      "Textured surface that stays safe in the rain",
      "Freeze-thaw tolerant build",
      "Edge and drainage detailing included",
    ],
    best: "Patios, sundecks over concrete, walkways, and pool surrounds.",
    image: "sealed",
    group: "Concrete Work",
    faqs: [
      {
        q: "Can you coat a patio in the rainy season?",
        a: "We need a dry weather window and a dry slab. We book outdoor work around the forecast rather than risking the finish.",
      },
      {
        q: "Will moss grow on it?",
        a: "Far less than on bare concrete, since there is no open pore structure for moss to root into.",
      },
    ],
  },
  {
    slug: "floor-polishing",
    title: "Floor Polishing",
    short:
      "Mechanically polished concrete that gets its shine from grinding and densifying, not from a coating.",
    intro:
      "Polished concrete is a finish, not a layer. We grind through progressive diamond grits, densify the slab chemically so the surface hardens, then burnish to the sheen you choose. There is nothing on top to peel, which is why polished floors last so long in busy buildings.",
    bullets: [
      "Progressive diamond grinding to your chosen sheen",
      "Chemical densifier hardens the slab itself",
      "Nothing on the surface to peel or delaminate",
      "Low maintenance: dust mop and occasional burnish",
    ],
    best: "Showrooms, retail floors, offices, and open-plan commercial space.",
    image: "sealed",
    group: "Concrete Work",
    faqs: [
      {
        q: "Is polished concrete the same as an epoxy floor?",
        a: "No. Polishing refines the concrete itself; epoxy adds a resin layer on top. Polishing suits sound, good-looking slabs.",
      },
      {
        q: "Can any slab be polished?",
        a: "It needs to be hard, reasonably flat, and free of heavy patching. We assess before recommending it.",
      },
    ],
  },
  {
    slug: "marble-floor-installation",
    title: "Marble Floor Installation",
    short:
      "Marble laid flat, level, and sealed, with the substrate prepared properly before a single slab goes down.",
    intro:
      "Marble is unforgiving: a substrate out by a few millimetres shows up as lippage you will feel underfoot for years. We level and prime the base first, set the stone with the right adhesive for the format, then grout and seal so the surface resists staining from day one.",
    bullets: [
      "Substrate levelled and primed before setting",
      "Layout planned around sightlines and veining",
      "Correct adhesive for the slab format and location",
      "Sealed on completion to resist staining",
    ],
    best: "Entries, lobbies, bathrooms, and feature residential floors.",
    image: "metallic",
    group: "Specialty Floors",
    faqs: [
      {
        q: "Do you supply the marble or do we?",
        a: "Either. Many clients pick their own slabs at a supplier and we handle preparation, setting, and sealing.",
      },
      {
        q: "How often does marble need resealing?",
        a: "Usually every one to two years in a busy area, sooner in a kitchen or bathroom that sees acidic spills.",
      },
    ],
  },
  {
    slug: "floor-installation",
    title: "Floor Installation",
    short:
      "Full floor installation with the prep, moisture control, and levelling handled before the finish goes down.",
    intro:
      "Whatever finish you have chosen, the result depends on what is under it. We handle the unglamorous half properly: moisture testing, levelling, priming, and transitions, then install the finish to the manufacturer's spec so any warranty on it actually stands.",
    bullets: [
      "Moisture testing and levelling before installation",
      "Transitions and thresholds detailed cleanly",
      "Installed to manufacturer specification",
      "Site left clean and ready to use",
    ],
    best: "Renovations and new builds needing a complete floor package.",
    image: "flake",
    group: "Specialty Floors",
    faqs: [
      {
        q: "Do you remove the old floor?",
        a: "Yes, removal and disposal can be included in the quote, including glued-down and tiled finishes.",
      },
      {
        q: "Can you work alongside other trades?",
        a: "We coordinate sequencing with your builder so the floor goes in at the right point, not too early.",
      },
    ],
  },
  {
    slug: "epoxy-floor-installation",
    title: "Epoxy Floor Installation",
    short:
      "The full install process, from slab assessment and grinding through broadcast, top coat, and walkthrough.",
    intro:
      "Here is how our epoxy installs actually run: we assess and moisture test, diamond grind the slab, repair cracks and spalls, prime, lay the base coat, broadcast flake or quartz if you have chosen it, scrape and vacuum, then apply the clear top coat and walk the finished floor with you before we leave.",
    bullets: [
      "Assessment and moisture test before booking",
      "Dust-extracted diamond grinding and repair",
      "Base coat, broadcast, scrape, and vacuum",
      "Clear top coat and joint walkthrough on completion",
    ],
    best: "Anyone who wants to know exactly what happens on install day.",
    image: "metallic",
    group: "Epoxy Systems",
    faqs: [
      {
        q: "Do I need to be home during the install?",
        a: "Only for the start and the final walkthrough. We will arrange access for the rest.",
      },
      {
        q: "What do you need from me beforehand?",
        a: "A clear floor, access to power and water, and a parking spot for the trailer.",
      },
    ],
  },
  {
    slug: "epoxy-coating-contractor",
    title: "Epoxy Coating Contractor",
    short:
      "A local, insured Surrey epoxy contractor who quotes in writing and shows up when the calendar says so.",
    intro:
      "Choosing a contractor matters more than choosing a product, because the same resin can last fifteen years or fail in one depending on who applies it. We are local to Surrey, insured and WCB covered, quote in writing with the system named, and we do not take deposits for work we cannot schedule.",
    bullets: [
      "Local Surrey crew, not a subcontracted franchise",
      "Written quotes that name the actual products",
      "Insured and WCB covered on every site",
      "Honest scheduling, no ghosting after the deposit",
    ],
    best: "Homeowners, builders, and facility managers vetting a contractor.",
    image: "metallic",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Can I see previous jobs?",
        a: "Yes. We can show recent local installs and put you in touch with past customers in your area.",
      },
      {
        q: "Do you offer a warranty?",
        a: "Every install carries a workmanship warranty, with terms set out in the quote before you commit.",
      },
    ],
  },
  {
    slug: "concrete-coating-contractor",
    title: "Concrete Coating Contractor",
    short:
      "Specification, preparation, and installation from one accountable contractor, so nobody gets to pass blame.",
    intro:
      "When prep and coating are split between trades, failures turn into finger-pointing. We handle the whole chain: testing the slab, specifying the system, preparing the surface, and installing it. If something is wrong with the floor, there is exactly one company to call.",
    bullets: [
      "Single point of responsibility for the whole floor",
      "Testing and specification, not guesswork",
      "Full preparation and installation in-house",
      "Documented system details for your records",
    ],
    best: "Property managers, strata councils, and general contractors.",
    image: "solid",
    group: "Commercial & Industrial",
    faqs: [
      {
        q: "Can you work to our consultant's specification?",
        a: "Yes, we regularly install to third-party specs and provide sign-off records at each stage.",
      },
      {
        q: "Do you handle strata tender processes?",
        a: "We do. We can attend council meetings and provide the documentation strata insurers usually ask for.",
      },
    ],
  },
];

export function findService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceGroups = [
  "Epoxy Systems",
  "Specialty Floors",
  "Concrete Work",
  "Commercial & Industrial",
] as const;

const TITLE_SUFFIXES = [
  " in Surrey BC | Pacific Floors & Coatings",
  " Surrey BC | Pacific Floors & Coatings",
  " Surrey BC | Pacific Floors",
  " Surrey BC | Pacific Coatings",
  " | Pacific Floors & Coatings",
  " Surrey BC",
];

/** Builds a meta title as close to 59 characters as possible without exceeding it. */
export function metaTitle(base: string): string {
  let best = base.slice(0, 59);
  let bestLength = -1;
  for (const suffix of TITLE_SUFFIXES) {
    const candidate = base + suffix;
    if (candidate.length <= 59 && candidate.length > bestLength) {
      best = candidate;
      bestLength = candidate.length;
    }
  }
  return best;
}

const DESCRIPTION_TAILS = [
  " Free on-site estimates across Surrey, BC and Metro Vancouver.",
  " Free estimates across Surrey, BC and Metro Vancouver.",
  " Free quotes across Surrey and Metro Vancouver.",
  " Serving Surrey, BC and Metro Vancouver.",
  " Surrey, BC.",
];

/** Builds a meta description as close to 159 characters as possible without exceeding it. */
export function metaDescription(base: string): string {
  let best = base.length <= 159 ? base : `${base.slice(0, 156).trimEnd()}...`;
  let bestLength = best.length;
  for (const tail of DESCRIPTION_TAILS) {
    const candidate = base + tail;
    if (candidate.length <= 159 && candidate.length > bestLength) {
      best = candidate;
      bestLength = candidate.length;
    }
  }
  return best;
}
