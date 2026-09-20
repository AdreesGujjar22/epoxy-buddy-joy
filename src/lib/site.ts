export const SITE_URL = "https://epoxy-clone-pro.lovable.app";

export const site = {
  name: "Pacific Floors and Coatings",
  phone: "(236) 878-3386",
  phoneHref: "tel:+12368783386",
  email: "pacificfloorsandcoatings@gmail.com",
  address: "7304 138 Street, Surrey, BC V3W 5H2, Canada",
  mapEmbed:
    "https://www.google.com/maps?q=Pacific%20Floors%20and%20Coatings%2C%207304%20138%20Street%2C%20Surrey%2C%20BC%20V3W%205H2%2C%20Canada&output=embed",
  mapLink: "https://maps.google.com/?q=Pacific+Floors+and+Coatings,+7304+138+Street,+Surrey,+BC+V3W+5H2",
  socials: {
    tiktok: "https://www.tiktok.com/@pacificfloorsandcoatings?is_from_webapp=1&sender_device=pc",
    instagram: "https://www.instagram.com/pacificfloorsandcoatings",
    facebook: "https://www.facebook.com/profile.php?id=61575485291064&mibextid=wwXIfr&rdid=P2B1Wtz38cHWsfKf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CfLX4mCz7%2F%3Fmibextid%3DwwXIfr#",
    linkedin: "https://www.linkedin.com/in/pacificfloorsandcoatingsca/",
  },
  rating: "4.9",
  placeId: "ChIJv0xWqnlg2KAR8iSja42tgRE",
};

export const sameAs = [
  "https://www.tiktok.com/@pacificfloorsandcoatings",
  "https://www.instagram.com/pacificfloorsandcoatings",
  "https://www.facebook.com/profile.php?id=61575485291064",
  "https://www.linkedin.com/in/pacificfloorsandcoatingsca/",
];

export { services, findService, serviceGroups, metaTitle, metaDescription } from "./services";
export type { Service } from "./services";


export type ServiceArea = {
  slug: string;
  name: string;
  region: string;
  blurb: string;
  neighbourhoods: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "surrey",
    name: "Surrey",
    region: "Surrey, BC",
    blurb:
      "Our home base. From Newton garages to Campbell Heights warehouses, we install metallic, flake, and solid epoxy floors across Surrey every week.",
    neighbourhoods: [
      "Newton",
      "Guildford",
      "Fleetwood",
      "Cloverdale",
      "South Surrey",
      "Whalley / City Centre",
      "Panorama Ridge",
      "Campbell Heights",
      "Port Kells",
      "Fraser Heights",
    ],
  },
  {
    slug: "burnaby",
    name: "Burnaby",
    region: "Burnaby, BC",
    blurb:
      "Residential garages, strata parkades, and light-industrial shops across Burnaby get the same diamond-ground prep and long-life coatings.",
    neighbourhoods: [
      "Brentwood",
      "Metrotown",
      "Edmonds",
      "Burnaby Heights",
      "Big Bend",
      "Lougheed",
      "Capitol Hill",
      "Deer Lake",
    ],
  },
  {
    slug: "richmond",
    name: "Richmond",
    region: "Richmond, BC",
    blurb:
      "Moisture-aware systems built for Richmond's slab conditions, from Steveston garages to Bridgeport warehouse floors.",
    neighbourhoods: [
      "Steveston",
      "Brighouse",
      "Bridgeport",
      "Hamilton",
      "Terra Nova",
      "Ironwood",
      "East Cambie",
      "Riverport",
    ],
  },
  {
    slug: "coquitlam",
    name: "Coquitlam",
    region: "Coquitlam, BC",
    blurb:
      "Garage and basement coatings across Coquitlam, Port Coquitlam, and Port Moody with clean, dust-controlled installs.",
    neighbourhoods: [
      "Burke Mountain",
      "Westwood Plateau",
      "Maillardville",
      "Austin Heights",
      "Eagle Ridge",
      "Port Coquitlam",
      "Port Moody",
    ],
  },
  {
    slug: "langley",
    name: "Langley",
    region: "Langley, BC",
    blurb:
      "Shops, hobby garages, and acreage outbuildings throughout Langley City and Township, finished with tough flake and solid systems.",
    neighbourhoods: [
      "Willoughby",
      "Walnut Grove",
      "Brookswood",
      "Murrayville",
      "Fort Langley",
      "Aldergrove",
      "Langley City",
    ],
  },
  {
    slug: "delta",
    name: "Delta",
    region: "Delta, BC",
    blurb:
      "North Delta, Ladner, and Tsawwassen homeowners and Tilbury businesses trust us for slip-resistant, easy-clean floors.",
    neighbourhoods: ["North Delta", "Ladner", "Tsawwassen", "Tilbury", "Sunshine Hills", "Annieville"],
  },
  {
    slug: "white-rock",
    name: "White Rock",
    region: "White Rock, BC",
    blurb:
      "Coastal homes and small businesses in White Rock get sealed concrete and metallic finishes that stand up to salt air and moisture.",
    neighbourhoods: ["East Beach", "West Beach", "Hillside", "Marine Drive", "Ocean Park", "Crescent Beach"],
  },
  {
    slug: "new-westminster",
    name: "New Westminster",
    region: "New Westminster, BC",
    blurb:
      "Older slabs are our specialty — crack repair, grinding, and coatings for heritage garages and Queensborough shops.",
    neighbourhoods: ["Queensborough", "Sapperton", "Uptown", "Downtown", "West End", "Connaught Heights"],
  },
  {
    slug: "maple-ridge",
    name: "Maple Ridge",
    region: "Maple Ridge, BC",
    blurb:
      "Maple Ridge and Pitt Meadows garages, workshops, and equipment bays finished with heavy-duty coatings.",
    neighbourhoods: ["Albion", "Silver Valley", "Hammond", "Websters Corners", "Pitt Meadows", "Whonnock"],
  },
  {
    slug: "abbotsford",
    name: "Abbotsford",
    region: "Abbotsford, BC",
    blurb:
      "Large shops, agricultural buildings, and family garages across Abbotsford, installed on schedule with clear pricing.",
    neighbourhoods: ["Clearbrook", "Sumas Prairie", "Matsqui", "West Abbotsford", "Auguston", "Sandy Hill"],
  },
];

export function findServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((a) => a.slug === slug);
}
