import { Direction } from "~/types"

export type Stratagem = {
  // icon?: string
  name: string
  sequence: Direction[]
}

// Sequences from:
// https://helldivers.fandom.com/wiki/Stratagem_Codes_(Helldivers_2)
export const stratagems: Stratagem[] = [
  // Supply Stratagems
  // Supply: Backpacks
  {
    name: "LIFT-850 Jump Pack",
    sequence: ["down", "up", "up", "down", "up"],
  },
  {
    name: "B-1 Supply Pack",
    sequence: ["down", "left", "down", "up", "up", "down"],
  },
  {
    name: 'AX/LAS-5 "Guard Dog" Rover',
    sequence: ["down", "up", "left", "up", "right", "right"],
  },
  {
    name: "SH-20 Ballistic Shield Backpack",
    sequence: ["down", "left", "down", "down", "up", "left"],
  },
  {
    name: "SH-32 Shield Generator",
    sequence: ["down", "up", "left", "right", "left", "right"],
  },
  {
    name: 'AX/AR-23 "Guard Dog"',
    sequence: ["down", "up", "left", "up", "right", "down"],
  },

  // Supply: Support Weapons
  {
    name: "MG-43 Machine Gun",
    sequence: ["down", "left", "down", "up", "right"],
  },
  {
    name: "APW-1 Anti-Material Rifle",
    sequence: ["down", "left", "right", "up", "down"],
  },
  {
    name: "M-105 Stalwart",
    sequence: ["down", "left", "down", "up", "up", "left"],
  },
  {
    name: "EAT-17 Expendable Anti-tank",
    sequence: ["down", "down", "left", "up", "right"],
  },
  {
    name: "GR-8 Recoilless Rifle",
    sequence: ["down", "left", "right", "right", "left"],
  },
  {
    name: "FLAM-40 Flamethrower",
    sequence: ["down", "left", "up", "down", "up"],
  },
  {
    name: "AC-8 Autocannon",
    sequence: ["down", "left", "down", "up", "up", "right"],
  },
  {
    name: "MG-206 Heavy Machine Gun",
    sequence: ["down", "left", "up", "down", "down"],
  },
  {
    name: "RS-422 Railgun",
    sequence: ["down", "right", "down", "up", "left", "right"],
  },
  {
    name: "FAF-14 SPEAR Launcher",
    sequence: ["down", "down", "up", "down", "down"],
  },
  {
    name: "GL-21 Grenade Launcher",
    sequence: ["down", "left", "up", "left", "down"],
  },
  {
    name: "LAS-98 Laser Cannon",
    sequence: ["down", "left", "down", "up", "left"],
  },
  {
    name: "ARC-3 Arc Thrower",
    sequence: ["down", "right", "down", "up", "left", "left"],
  },
  {
    name: "LAS-99 Quasar Cannon",
    sequence: ["down", "down", "up", "left", "right"],
  },

  // Mission Stratagems
  {
    name: "Reinforce",
    sequence: ["up", "down", "right", "left", "up"],
  },
  {
    name: "SOS Beacon",
    sequence: ["up", "down", "right", "up"],
  },
  {
    name: "Resupply",
    sequence: ["down", "down", "up", "right"],
  },
  {
    name: "NUX-223 Hellbomb",
    sequence: ["down", "up", "left", "down", "up", "right", "down", "up"],
  },
  {
    name: "SSSD Delivery",
    sequence: ["down", "down", "down", "up", "up"],
  },
  {
    name: "Seismic Probe",
    sequence: ["up", "up", "left", "right", "down", "down"],
  },
  {
    name: "Upload Data",
    sequence: ["down", "down", "up", "up", "up"],
  },
  {
    name: "Eagle Rearm",
    sequence: ["up", "up", "left", "up", "right"],
  },
  // {
  //   name: "Illumination Flare",
  //   sequence: ["right", "right", "left", "left"],
  // },
  {
    name: "SEAF Artillery",
    sequence: ["right", "up", "up", "down"],
  },
  {
    name: "Super Earth Flag",
    sequence: ["down", "up", "down", "up"],
  },

  // Defensive Stratagems
  {
    name: "E/MG-101 HMG Emplacement",
    sequence: ["down", "up", "left", "right", "right", "left"],
  },
  {
    name: "FX-12 Shield Generator Relay",
    sequence: ["down", "down", "left", "right", "left", "right"],
  },
  {
    name: "A/ARC-3 Tesla Tower",
    sequence: ["down", "up", "right", "up", "left", "right"],
  },
  {
    name: "MD-6 Anti-Personnel Minefield",
    sequence: ["down", "left", "up", "right"],
  },
  {
    name: "MD-I4 Incendiary Mines",
    sequence: ["down", "left", "left", "down"],
  },
  {
    name: "A/MG-43 Machine Gun Sentry",
    sequence: ["down", "up", "right", "right", "up"],
  },
  {
    name: "A/G-16 Gatling Sentry",
    sequence: ["down", "up", "right", "left"],
  },
  {
    name: "A/M-12 Mortar Sentry",
    sequence: ["down", "up", "right", "right", "down"],
  },
  {
    name: "A/AC-8 Autocannon Sentry",
    sequence: ["down", "up", "right", "up", "left", "up"],
  },
  {
    name: "A/MLS-4X Rocket Sentry",
    sequence: ["down", "up", "right", "left"],
  },
  {
    name: "A/M-23 EMS Mortar Sentry",
    sequence: ["down", "up", "right", "down", "right"],
  },

  // Offensive Stratagems
  // Offensive: Orbital
  {
    name: "Orbital Gatling Barrage",
    sequence: ["right", "down", "left", "up", "up"],
  },
  {
    name: "Orbital Airburst Strike",
    sequence: ["right", "right", "right"],
  },
  {
    name: "Orbital 120MM HE Barrage",
    sequence: ["right", "right", "down", "left", "right", "down"],
  },
  {
    name: "Orbital 380MM HE Barrage",
    sequence: ["right", "down", "up", "up", "left", "down", "down"],
  },
  {
    name: "Orbital Walking Barrage",
    sequence: ["right", "down", "right", "down", "right", "down"],
  },
  {
    name: "Orbital Laser",
    sequence: ["right", "down", "up", "right", "down"],
  },
  {
    name: "Orbital Railcannon Strike",
    sequence: ["right", "up", "down", "down", "right"],
  },
  {
    name: "Orbital Precision Strike",
    sequence: ["right", "right", "up"],
  },
  {
    name: "Orbital Gas Strike",
    sequence: ["right", "right", "down", "right"],
  },
  {
    name: "Orbital EMS Strike",
    sequence: ["right", "right", "left", "down"],
  },
  {
    name: "Orbital Smoke Strike",
    sequence: ["right", "right", "down", "up"],
  },

  // Offensive: Eagle
  {
    name: "Eagle Strafing Run",
    sequence: ["up", "right", "right"],
  },
  {
    name: "Eagle Airstrike",
    sequence: ["up", "right", "down", "right"],
  },
  {
    name: "Eagle Cluster Bomb",
    sequence: ["up", "right", "down", "down", "right"],
  },
  {
    name: "Eagle Napalm Airstrike",
    sequence: ["up", "right", "down", "up"],
  },
  {
    name: "Eagle Smoke Strike",
    sequence: ["up", "right", "up", "down"],
  },
  {
    name: "Eagle 110MM Rocket Pods",
    sequence: ["up", "right", "up", "left"],
  },
  {
    name: "Eagle 500kg Bomb",
    sequence: ["up", "right", "down", "down", "down"],
  },
]
