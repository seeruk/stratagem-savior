import React, { SVGProps } from "react"

import { Direction } from "~/types"

import AntiMaterialRifle from "~/icons/Anti-Materiel Rifle.svg?react"
import AntiPersonnelMinefield from "~/icons/Anti-Personnel Minefield.svg?react"
import ArcThrower from "~/icons/Arc Thrower.svg?react"
import Autocannon from "~/icons/Autocannon.svg?react"
import AutocannonSentry from "~/icons/Autocannon Sentry.svg?react"
import BallisticShieldBackpack from "~/icons/Ballistic Shield Backpack.svg?react"
import EagleAirstrike from "~/icons/Eagle Airstrike.svg?react"
import EagleClusterBomb from "~/icons/Eagle Cluster Bomb.svg?react"
import EagleNapalmAirstrike from "~/icons/Eagle Napalm Airstrike.svg?react"
import EagleRearm from "~/icons/Eagle Rearm.svg?react"
import EagleSmokeStrike from "~/icons/Eagle Smoke Strike.svg?react"
import EagleStrafingRun from "~/icons/Eagle Strafing Run.svg?react"
import Eagle110MMRocketPods from "~/icons/Eagle 110MM Rocket Pods.svg?react"
import Eagle500KGBomb from "~/icons/Eagle 500KG Bomb.svg?react"
import EMSMortarSentry from "~/icons/EMS Mortar Sentry.svg?react"
import ExpendableAntiTank from "~/icons/Expendable Anti-Tank.svg?react"
import Flamethrower from "~/icons/Flamethrower.svg?react"
import GatlingSentry from "~/icons/Gatling Sentry.svg?react"
import GrenadeLauncher from "~/icons/Grenade Launcher.svg?react"
import GuardDog from "~/icons/Guard Dog.svg?react"
import GuardDogRover from "~/icons/Guard Dog Rover.svg?react"
import HeavyMachineGun from "~/icons/Heavy Machine Gun.svg?react"
import Hellbomb from "~/icons/Hellbomb.svg?react"
import HMGEmplacement from "~/icons/HMG Emplacement.svg?react"
import IncendiaryMines from "~/icons/Incendiary Mines.svg?react"
import JumpPack from "~/icons/Jump Pack.svg?react"
import LaserCannon from "~/icons/Laser Cannon.svg?react"
import MachineGun from "~/icons/Machine Gun.svg?react"
import MachineGunSentry from "~/icons/Machine Gun Sentry.svg?react"
import MortarSentry from "~/icons/Mortar Sentry.svg?react"
import OrbitalAirburstStrike from "~/icons/Orbital Airburst Strike.svg?react"
import OrbitalEMSStrike from "~/icons/Orbital EMS Strike.svg?react"
import OrbitalGasStrike from "~/icons/Orbital Gas Strike.svg?react"
import OrbitalGatlingBarrage from "~/icons/Orbital Gatling Barrage.svg?react"
import OrbitalIlluminationFlare from "~/icons/Orbital Illumination Flare.svg?react"
import OrbitalLaser from "~/icons/Orbital Laser.svg?react"
import OrbitalPrecisionStrike from "~/icons/Orbital Precision Strike.svg?react"
import OrbitalRailcannonStrike from "~/icons/Orbital Railcannon Strike.svg?react"
import OrbitalSmokeStrike from "~/icons/Orbital Smoke Strike.svg?react"
import OrbitalWalkingBarrage from "~/icons/Orbital Walking Barrage.svg?react"
import Orbital120MMHEBarrage from "~/icons/Orbital 120MM HE Barrage.svg?react"
import Orbital380MMHEBarrage from "~/icons/Orbital 380MM HE Barrage.svg?react"
import PatriotExosuit from "~/icons/Patriot Exosuit.svg?react"
import ProspectingDrill from "~/icons/Prospecting Drill.svg?react"
import QuasarCannon from "~/icons/Quasar Cannon.svg?react"
import Railgun from "~/icons/Railgun.svg?react"
import RecoillesRifle from "~/icons/Recoilless Rifle.svg?react"
import Reinforce from "~/icons/Reinforce.svg?react"
import Resupply from "~/icons/Resupply.svg?react"
import RocketSentry from "~/icons/Rocket Sentry.svg?react"
import SEAFArtillery from "~/icons/SEAF Artillery.svg?react"
import SeismicProbe from "~/icons/Seismic Probe.svg?react"
import ShieldGeneratorPack from "~/icons/Shield Generator Pack.svg?react"
import ShieldGeneratorRelay from "~/icons/Shield Generator Relay.svg?react"
import SOSBeacon from "~/icons/SOS Beacon.svg?react"
import Spear from "~/icons/Spear.svg?react"
import Stalwart from "~/icons/Stalwart.svg?react"
import SuperEarthFlag from "~/icons/Super Earth Flag.svg?react"
import SupplyPack from "~/icons/Supply Pack.svg?react"
import TeslaTower from "~/icons/Tesla Tower.svg?react"
import UploadData from "~/icons/Upload Data.svg?react"

export type Stratagem = {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>
  name: string
  sequence: Direction[]
}

// Sequences from:
// https://steamcommunity.com/sharedfiles/filedetails/?id=3161075951
export const stratagems: Stratagem[] = [
  // General
  {
    icon: Reinforce,
    name: "Reinforce",
    sequence: ["up", "down", "right", "left", "up"],
  },
  {
    icon: Resupply,
    name: "Resupply",
    sequence: ["down", "down", "up", "right"],
  },
  {
    icon: SOSBeacon,
    name: "SOS Beacon",
    sequence: ["up", "down", "right", "up"],
  },
  {
    icon: SEAFArtillery,
    name: "SEAF Artillery",
    sequence: ["right", "up", "up", "down"],
  },
  {
    icon: Hellbomb,
    name: "NUX-223 Hellbomb",
    sequence: ["down", "up", "left", "down", "up", "right", "down", "up"],
  },
  {
    icon: ProspectingDrill,
    name: "Prospecting Drill",
    sequence: ["up", "down", "left", "right"],
  },
  {
    icon: SeismicProbe,
    name: "Seismic Probe",
    sequence: ["up", "up", "left", "right", "down", "down"],
  },
  {
    icon: SuperEarthFlag,
    name: "Super Earth Flag",
    sequence: ["down", "up", "down", "up"],
  },
  {
    icon: UploadData,
    name: "Upload Data",
    sequence: ["down", "down", "up", "up", "up"],
  },

  // Patriot Administration Center
  {
    icon: MachineGun,
    name: "MG-43 Machine Gun",
    sequence: ["down", "left", "down", "up", "right"],
  },
  {
    icon: AntiMaterialRifle,
    name: "APW-1 Anti-Material Rifle",
    sequence: ["down", "left", "right", "up", "down"],
  },
  {
    icon: Stalwart,
    name: "M-105 Stalwart",
    sequence: ["down", "left", "down", "up", "up", "left"],
  },
  {
    icon: ExpendableAntiTank,
    name: "EAT-17 Expendable Anti-tank",
    sequence: ["down", "down", "left", "up", "right"],
  },
  {
    icon: RecoillesRifle,
    name: "GR-8 Recoilless Rifle",
    sequence: ["down", "left", "right", "right", "left"],
  },
  {
    icon: Flamethrower,
    name: "FLAM-40 Flamethrower",
    sequence: ["down", "left", "up", "down", "up"],
  },
  {
    icon: Autocannon,
    name: "AC-8 Autocannon",
    sequence: ["down", "left", "down", "up", "up", "right"],
  },
  {
    icon: Railgun,
    name: "RS-422 Railgun",
    sequence: ["down", "right", "down", "up", "left", "right"],
  },
  {
    icon: Spear,
    name: "FAF-14 SPEAR Launcher",
    sequence: ["down", "down", "up", "down", "down"],
  },
  {
    icon: QuasarCannon,
    name: "LAS-99 Quasar Cannon",
    sequence: ["down", "down", "up", "left", "right"],
  },

  // Orbital Cannons
  {
    icon: OrbitalGatlingBarrage,
    name: "Orbital Gatling Barrage",
    sequence: ["right", "down", "left", "up", "up"],
  },
  {
    icon: OrbitalAirburstStrike,
    name: "Orbital Airburst Strike",
    sequence: ["right", "right", "right"],
  },
  {
    icon: Orbital120MMHEBarrage,
    name: "Orbital 120MM HE Barrage",
    sequence: ["right", "right", "down", "left", "right", "down"],
  },
  {
    icon: Orbital380MMHEBarrage,
    name: "Orbital 380MM HE Barrage",
    sequence: ["right", "down", "up", "up", "left", "down", "down"],
  },
  {
    icon: OrbitalWalkingBarrage,
    name: "Orbital Walking Barrage",
    sequence: ["right", "down", "right", "down", "right", "down"],
  },
  {
    icon: OrbitalLaser,
    name: "Orbital Laser",
    sequence: ["right", "down", "up", "right", "down"],
  },
  {
    icon: OrbitalRailcannonStrike,
    name: "Orbital Railcannon Strike",
    sequence: ["right", "up", "down", "down", "right"],
  },

  // Hangar
  {
    icon: EagleStrafingRun,
    name: "Eagle Strafing Run",
    sequence: ["up", "right", "right"],
  },
  {
    icon: EagleAirstrike,
    name: "Eagle Airstrike",
    sequence: ["up", "right", "down", "right"],
  },
  {
    icon: EagleClusterBomb,
    name: "Eagle Cluster Bomb",
    sequence: ["up", "right", "down", "down", "right"],
  },
  {
    icon: EagleNapalmAirstrike,
    name: "Eagle Napalm Airstrike",
    sequence: ["up", "right", "down", "up"],
  },
  {
    icon: JumpPack,
    name: "LIFT-850 Jump Pack",
    sequence: ["down", "up", "up", "down", "up"],
  },
  {
    icon: EagleSmokeStrike,
    name: "Eagle Smoke Strike",
    sequence: ["up", "right", "up", "down"],
  },
  {
    icon: Eagle110MMRocketPods,
    name: "Eagle 110MM Rocket Pods",
    sequence: ["up", "right", "up", "left"],
  },
  {
    icon: Eagle500KGBomb,
    name: "Eagle 500kg Bomb",
    sequence: ["up", "right", "down", "down", "down"],
  },
  {
    icon: EagleRearm,
    name: "Eagle Rearm",
    sequence: ["up", "up", "left", "up", "right"],
  },

  // Bridge
  {
    icon: OrbitalPrecisionStrike,
    name: "Orbital Precision Strike",
    sequence: ["right", "right", "up"],
  },
  {
    icon: OrbitalGasStrike,
    name: "Orbital Gas Strike",
    sequence: ["right", "right", "down", "right"],
  },
  {
    icon: OrbitalEMSStrike,
    name: "Orbital EMS Strike",
    sequence: ["right", "right", "left", "down"],
  },
  {
    icon: OrbitalSmokeStrike,
    name: "Orbital Smoke Strike",
    sequence: ["right", "right", "down", "up"],
  },
  {
    icon: HMGEmplacement,
    name: "E/MG-101 HMG Emplacement",
    sequence: ["down", "up", "left", "right", "right", "left"],
  },
  {
    icon: ShieldGeneratorRelay,
    name: "FX-12 Shield Generator Relay",
    sequence: ["down", "down", "left", "right", "left", "right"],
  },
  {
    icon: TeslaTower,
    name: "A/ARC-3 Tesla Tower",
    sequence: ["down", "up", "right", "up", "left", "right"],
  },
  {
    icon: OrbitalIlluminationFlare,
    name: "Illumination Flare",
    sequence: ["right", "right", "left", "left"],
  },

  // Engineering Bay
  {
    icon: AntiPersonnelMinefield,
    name: "MD-6 Anti-Personnel Minefield",
    sequence: ["down", "left", "up", "right"],
  },
  {
    icon: SupplyPack,
    name: "B-1 Supply Pack",
    sequence: ["down", "left", "down", "up", "up", "down"],
  },
  {
    icon: GrenadeLauncher,
    name: "GL-21 Grenade Launcher",
    sequence: ["down", "left", "up", "left", "down"],
  },
  {
    icon: LaserCannon,
    name: "LAS-98 Laser Cannon",
    sequence: ["down", "left", "down", "up", "left"],
  },
  {
    icon: IncendiaryMines,
    name: "MD-I4 Incendiary Mines",
    sequence: ["down", "left", "left", "down"],
  },
  {
    icon: GuardDogRover,
    name: 'AX/LAS-5 "Guard Dog" Rover',
    sequence: ["down", "up", "left", "up", "right", "right"],
  },
  {
    icon: BallisticShieldBackpack,
    name: "SH-20 Ballistic Shield Backpack",
    sequence: ["down", "left", "down", "down", "up", "left"],
  },
  {
    icon: ArcThrower,
    name: "ARC-3 Arc Thrower",
    sequence: ["down", "right", "down", "up", "left", "left"],
  },
  {
    icon: ShieldGeneratorPack,
    name: "SH-32 Shield Generator",
    sequence: ["down", "up", "left", "right", "left", "right"],
  },
  {
    icon: HeavyMachineGun,
    name: "MG-206 Heavy Machine Gun",
    sequence: ["down", "left", "up", "down", "down"],
  },

  // Robotic Workshop
  {
    icon: MachineGunSentry,
    name: "A/MG-43 Machine Gun Sentry",
    sequence: ["down", "up", "right", "right", "up"],
  },
  {
    icon: GatlingSentry,
    name: "A/G-16 Gatling Sentry",
    sequence: ["down", "up", "right", "left"],
  },
  {
    icon: MortarSentry,
    name: "A/M-12 Mortar Sentry",
    sequence: ["down", "up", "right", "right", "down"],
  },
  {
    icon: GuardDog,
    name: 'AX/AR-23 "Guard Dog"',
    sequence: ["down", "up", "left", "up", "right", "down"],
  },
  {
    icon: AutocannonSentry,
    name: "A/AC-8 Autocannon Sentry",
    sequence: ["down", "up", "right", "up", "left", "up"],
  },
  {
    icon: RocketSentry,
    name: "A/MLS-4X Rocket Sentry",
    sequence: ["down", "up", "right", "left"],
  },
  {
    icon: EMSMortarSentry,
    name: "A/M-23 EMS Mortar Sentry",
    sequence: ["down", "up", "right", "down", "right"],
  },
  {
    icon: PatriotExosuit,
    name: "EXO-45 Patriot Exosuit",
    sequence: ["left", "down", "right", "up", "left", "down", "down"],
  },
]
