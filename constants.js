// @flow
import * as d3 from 'd3'

export type EngTrackId = 'TECHNOLOGY' | 'SYSTEM' | 'PEER_INFLUENCE' | 'PROCESS' |
'COMPANY_INFLUENCE'
export type AutTrackId = 'TECHNOLOGY_AUTOMATION' | 'TESTING' | 'PEER_INFLUENCE' | 'PROCESS' |
'COMPANY_INFLUENCE'

export type TrackId = EngTrackId

export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'TECHNOLOGY': Milestone,
  'TECHNOLOGY_AUTOMATION': Milestone,
  'SYSTEM': Milestone,
  'TESTING': Milestone,
  'PEER_INFLUENCE': Milestone,
  'PROCESS': Milestone,
  'COMPANY_INFLUENCE': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1',
  '8': '2',
  '13': '3',
  '19': '4',
  '26': '5',
}

export const maxLevel = 26

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type EngTracks = {|
  'TECHNOLOGY': Track,
  'SYSTEM': Track,
  'PEER_INFLUENCE': Track,
  'PROCESS': Track,
  'COMPANY_INFLUENCE': Track
|}

type AutTracks = {|
  'TECHNOLOGY_AUTOMATION': Track,
  'TESTING': Track,
  'PEER_INFLUENCE': Track,
  'PROCESS': Track,
  'COMPANY_INFLUENCE': Track
|}

export const tracks: Tracks = {
  "TECHNOLOGY": {
    "displayName": "Technology",
    "category": "A",
    "description": "Knowledge of the tech stack and tools used to build products and features",
    "milestones": [{
      "name": "Adopts",
      "summary": "Individual uses the technologies that are part of the stack",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Fetched and displayed a new stream, using existing stream item styles",
      ],
    }, {
      "name": "Specializes",
      "summary": "Learns the ins and outs of one or more technologies",
      "signals": [
        "Defines new useful and appropriate proto-generated objects",
        "Creates simple new activities on Android",
        "Migrates code from old patterns to new patterns",
      ],
      "examples": [
        "Upgraded SDWebImage to a new major version",
        "Added support for rendering a new type of stream item",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "name": "Evangelizes",
      "summary": "Researches solutions and creates proofs of concept, as well as introducing new technologies to the team.",
      "signals": [
        "Implements complex features with a large product surface area",
        "Works effectively with  Android reactive programming framework",
        "Adds support for new iOS features after a major iOS version upgrade",
      ],
      "examples": [
        "Designed iOS caching strategy for offline reading",
        "Built series reader on Android",
        "Informed the team about recent best practice changes and deprecations",
      ],
    }, {
      "name": "Masters",
      "summary": "Has a very deep knowledge of the entire technology stack of the system and can be relied upon to help others learn and grow in the stack",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "name": "Creates",
      "summary": "Designs and creates new tools & technologies that are used by one or more teams.",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "TECHNOLOGY_AUTOMATION": {
    "displayName": "Technology & Automation",
    "category": "A",
    "description": "Knowledge of the tech stack and tools used to build products and features",
    "milestones": [{
      "name": "Adopts",
      "summary": "Individual uses the technologies that are part of the stack",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Added existing button to a different iOS surface",
        "Add follow button for publications on Android",
        "Fetched and displayed a new stream, using existing stream item styles",
      ],
    }, {
      "name": "Specializes",
      "summary": "Learns the ins and outs of one or more technologies",
      "signals": [
        "Defines new useful and appropriate proto-generated objects",
        "Creates simple new activities on Android",
        "Migrates code from old patterns to new patterns",
      ],
      "examples": [
        "Upgraded SDWebImage to a new major version",
        "Added support for rendering a new type of stream item",
        "Prototyped a simple new feature quickly",
      ],
    }, {
      "name": "Evangelizes",
      "summary": "Researches solutions and creates proofs of concept, as well as introducing new technologies to the team.",
      "signals": [
        "Implements complex features with a large product surface area",
        "Works effectively with  Android reactive programming framework",
        "Adds support for new iOS features after a major iOS version upgrade",
      ],
      "examples": [
        "Designed iOS caching strategy for offline reading",
        "Built series reader on Android",
        "Informed the team about recent best practice changes and deprecations",
      ],
    }, {
      "name": "Masters",
      "summary": "Has a very deep knowledge of the entire technology stack of the system and can be relied upon to help others learn and grow in the stack",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        "Implements interactive dismissals that bring delight",
      ],
      "examples": [
        "Upgraded CocoaPods to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Migrated Android persistance layer to reactive programming",
      ],
    }, {
      "name": "Creates",
      "summary": "Designs and creates new tools & technologies that are used by one or more teams.",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the Android platform",
      ],
      "examples": [
        "Defined and drove complete migration plan to Swift or Kotlin",
        "Implemented Android recycler views before platform support existed",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }],
  },

  "SYSTEM": {
    "displayName": "System",
    "category": "B",
    "description": "Level of ownership of the system(s) that the individual's team is responsible for",
    "milestones": [{
      "name": "Enhances",
      "summary": "Successfully implements features and bug fixes that other team members designed",
      "signals": [
        "Makes minor modifications to existing screens",
        "Fixes simple design quality issues",
        "Uses CSS appropriately, following style guide",
      ],
      "examples": [
        "Implemented sticky footer on the post page",
        "Hooked up the action to dismiss a post from a stream",
        "Built PaymentHistory screen using ResponseScreen",
      ],
    }, {
      "name": "Designs",
      "summary": "Designs and implements solutions to problems that have been identified by others",
      "signals": [
        "Makes sensible abstractions based on template and code patterns",
        "Specs and builds interactive components independently",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Built credit card input component",
        "Created shared buttons template",
        "Built modal system",
      ],
    }, {
      "name": "Owns",
      "summary": "Understands and owns the operation and monitoring of the systems, is aware of the SLAs, and identifies issues that need to be addressed in order to improve the ability of the system to remain stable and meet current needs",
      "signals": [
        "Provides useful design feedback and suggests feasible alternatives",
        "Performs systemic tasks to significantly minimise bundle size",
        "Acts a caretaker for all of web client code",
      ],
      "examples": [
        "Designed font loading strategy for Medium",
        "Researched utility of service workers for Medium",
        "Designed and implemented ResponseScreen",
      ],
    }, {
      "name": "Evolves",
      "summary": "Understands the future needs of the system(s) and evolves their architecture to meet those needs. Identifies early warning mechanisms to avert outages.",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Implements complex UI transitions that bring delight",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Designed Medium's post morpher and delta system",
        "Implemented Medium's scrolling text over image blur",
        "Designed and pioneered proto-based model storage",
      ],
    }, {
      "name": "Leads",
      "summary": "Helps define the future needs of the product and the path to reach that goal, as well as designing and implementing systems that can prevent outages and/or mitigate their impact.",
      "signals": [
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
        "Defines a long-term vision for web client and ensures projects are in service of it",
      ],
      "examples": [
        "Invented CSS in JS",
        "Defined and drove migration strategy to Lite",
        "Implemented unidirectional data flow to completion",
      ],
    }],
  },

  "PEER_INFLUENCE": {
    "displayName": "Peer Influence",
    "category": "C",
    "description": "Influence the individual has on their peers",
    "milestones": [{
      "name": "Learns",
      "summary": "Learns from others and applies what they learn in future work",
      "signals": [
        "Writes thorough postmortems for service outages",
        "Makes simple configuration changes to services",
        "Performs backfills safely and effectively, without causing pages",
      ],
      "examples": [
        "Made safe and effective Ansible changes",
        "Implemented new ETL pipelines based on existing ones",
        "Resolved out of disk errors independently",
      ],
    }, {
      "name": "Supports",
      "summary": "Uses what they know to support other team members and help them be successful.",
      "signals": [
        "Made minor version upgrades to technologies",
        "Builds machine learning jobs within the ML framework",
        "Triages service issues correctly and independently",
      ],
      "examples": [
        "Upgraded NodeJS from 8.0 to 8.1.1",
        "Built custom packages for RPMs",
        "Improved ETL efficiency by improving Dynamo to S3 loading",
      ],
    }, {
      "name": "Enhances",
      "summary": "Uses what they know to teach others and help them improve their knowledge",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Designs moderately complex systems",
        "Makes major version upgrades to libraries",
      ],
      "examples": [
        "Designed Ansible configuration management",
        "Built Medium's realtime stats pipeline",
        "Designed flexible framework for writing machine learning jobs",
      ],
    }, {
      "name": "Mentors",
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Designs complex projects that encompass multiple systems and technologies",
        "Demonstrates deep knowledge of foundational systems",
        "Introduces new databases and technologies to meet underserved needs",
      ],
      "examples": [
        "Designed and built BBFD",
        "Designed AWS configuration management",
        "Introduced Kinesis and pioneered streaming events pipeline",
      ],
    }, {
      "name": "Evolves",
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        "Designs transformational projects in service of long-term goals",
        "Defines the strategic vision for foundational work and supporting technologies",
        "Invents industry-leading techniques to solve complex problems",
      ],
      "examples": [
        "Invented a novel ML technique that advanced the state of the art",
        "Defined and developed Medium's continuous delivery strategy",
        "Developed and implemented HA strategy",
      ],
    }],
  },

  "PROCESS": {
    "displayName": "Process",
    "category": "D",
    "description": "Level of engagement with the development process",
    "milestones": [{
      "name": "Follows",
      "summary": "Follows the team processes",
      "signals": [
        "Adds NodeJS endpoints using layers architecture",
        "Adds golang endpoints using Gotham architecture",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Added IFTTT trigger for new bookmark to medium2",
        "Added delete audio route to Buggle",
        "Queried a Dynamo LSI appropriately",
      ],
    }, {
      "name": "Enforces",
      "summary": "Helps others follow the processes and makes sure they are used consistently",
      "signals": [
        "Assesses correctness and utility of existing code and avoids blind copy-pasting",
        "Generalizes code when appropriate",
        "Determines data needs from product requirements",
      ],
      "examples": [
        "Identified need for new index on Dynamo",
        "Acted as caretaker for routes protos",
        "Updated Facebook API version and codebase dependencies",
      ],
    }, {
      "name": "Challenges",
      "summary": "Challenges the team's processes and seeks to understand the why, as well as helping to examine if they still make sense",
      "signals": [
        "Acts as primary maintainer for existing critical systems",
        "Integrates third party services effectively",
        "Writes playbooks for new service maintenance",
      ],
      "examples": [
        "Implemented Google Auth login to Medium",
        "Implemented payments integration with Stripe",
        "Built Textshots server",
      ],
    }, {
      "name": "Adjusts",
      "summary": "Suggests new and better ways to do things and works with the team to evaluate them.",
      "signals": [
        "Delivers complex systems that achieve their goals",
        "Avoids subtle architectural mistakes when considering new systems",
        "Makes appropriate buy vs build choices",
      ],
      "examples": [
        "Designed Medium's ranked feed architecture",
        "Designed custom domains architecture",
        "Created Gotham framework for creating Go services",
      ],
    }, {
      "name": "Defines",
      "summary": "Defines new processes that the team may need to adopt to handle situations that have no other process to cover them. Guides the team when they attempt to rewrite existing processes.",
      "signals": [
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
        "Identifies and solves systemic problems with current architecture",
      ],
      "examples": [
        "Researched, vetted, and selected Go as Medium's statically typed language",
        "Defined microservices architecture and medium2 migration plan",
        "Defined and implemented proprietary IP core to the company's success",
      ],
    }],
  },

  "COMPANY_INFLUENCE": {
    "displayName": "Company Influence",
    "category": "E",
    "description": "Scope of influence of the individual within the company",
    "milestones": [{
      "name": "Subsystem",
      "summary": "Makes an impact on one or more subsystems",
      "signals": [
        "Estimates small tasks accurately",
        "Delivers tightly-scoped projects efficiently",
        "Writes effective technical specs outlining approach",
      ],
      "examples": [
        "Wrote the technical spec for featured post images",
        "Delivered stream item support for email digests",
        "Delivered payment history dashboard",
      ],
    }, {
      "name": "Product",
      "summary": "Makes an impact on an entire product",
      "signals": [
        "Performs research and considers alternative approaches",
        "Balances pragmatism and polish appropriately",
        "Defines and hits interim milestones",
      ],
      "examples": [
        "Delivered promo editor",
        "Delivered audio uploading for web client",
        "Executed the recommends to claps backfill",
      ],
    }, {
      "name": "Team/Multiple Products",
      "summary": "Makes an impact on multiple products/all products covered by the team.",
      "signals": [
        "Delegates tasks to others appropriately",
        "Integrates business needs into project planning",
        "Chooses appropriate project management strategy based on context",
      ],
      "examples": [
        "Ran project retro to assess improvement opportunities",
        "Completed launch checklist unprompted for well controlled rollout",
        "Facilitated project kickoff meeting to get buy-in",
      ],
    }, {
      "name": "Multiple Teams",
      "summary": "Makes an impact on products across multiple teams",
      "signals": [
        "Finds ways to deliver requested scope faster, and prioritizes backlog",
        "Manages dependencies on other projects and teams",
        "Leverages recognition of repeated project patterns",
      ],
      "examples": [
        "Oversaw technical delivery of Hightower",
        "Managed infrastructure migration to VPC",
        "Involved marketing, legal, and appropriate functions at project start",
      ],
    }, {
      "name": "Company",
      "summary": "Makes an impact across the technology portion of the company.",
      "signals": [
        "Considers external constraints and business objectives when planning",
        "Leads teams of teams, and coordinates effective cross-functional collaboration",
        "Owns a key company metric",
      ],
      "examples": [
        "Managed technical migration to SOA",
        "Lead technical delivery of 10/7",
        "Delivered multi-month engineering project on time",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552',"#FFBC42"])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
