
"use strict";

// ==========================================
// ZES HOOD STAFF HANDBOOK
// COMPLETE SCRIPT
// ==========================================

// ==========================================
// WEBSITE SECTIONS
// ==========================================

const sections = [
  {
    id: "overview",
    icon: "⌂",
    name: "Overview",
    desc: "Handbook home and directory"
  },
  {
    id: "rules",
    icon: "▤",
    name: "Staff Rules",
    desc: "Staff conduct, reports and regulations"
  },
  {
    id: "roles",
    icon: "♜",
    name: "Staff Role Responsibilities",
    desc: "Responsibilities for every staff rank"
  },
  {
    id: "starhosters",
    icon: "★",
    name: "Star Hosters",
    desc: "Star challenge hosting, logs and procedures"
  },
  {
    id: "tickets",
    icon: "▣",
    name: "Ticket System",
    desc: "Ticket handling and organisation"
  },
  {
    id: "bans",
    icon: "⬡",
    name: "Ban Logging",
    desc: "Ban evidence and logging procedures"
  },
  {
    id: "promotions",
    icon: "♛",
    name: "Promotions & Quotas",
    desc: "Staff progression and weekly requirements"
  },
  {
    id: "loa",
    icon: "◷",
    name: "LOA System",
    desc: "Leave of absence and reduced quotas"
  },
  {
    id: "strikes",
    icon: "⚑",
    name: "Strikes & Stripping",
    desc: "Staff disciplinary procedures"
  },
  {
    id: "evidence",
    icon: "▶",
    name: "Ban Evidence Library",
    desc: "Video examples of bannable offences"
  },
  {
    id: "commands",
    icon: "⌘",
    name: "Command Formats",
    desc: "Copyable staff commands and templates"
  }
];

// ==========================================
// STAFF HANDBOOK CONTENT
// ==========================================

const handbook = {

  // STAFF RULES

  rules: [
    {
      title: "Staff Conduct & Professionalism",
      content: `All staff members are expected to represent Zes Hood professionally.

Staff must treat players and other staff members with respect, remain impartial, and follow management instructions.

The following behaviour may result in disciplinary action:

• Disrespectful or toxic behaviour
• Inappropriate conduct
• Abuse of staff permissions
• Unnecessary arguments or disruption
• Behaviour that damages the reputation of the staff team

All moderation decisions must be fair and supported by valid evidence.`
    },
    {
      title: "Excessive Arguing With HR",
      content: `Staff members must communicate respectfully with High Rank staff.

Repeated arguments, refusing to cooperate, or creating unnecessary conflict may result in a strike.

Disagreements should be raised professionally through the appropriate channels.`
    },
    {
      title: "False Banning",
      content: `Staff members must never ban a player without sufficient evidence.

Prohibited actions include:

• Banning based only on suspicion
• Banning players for personal reasons
• Issuing false punishments
• Failing to document bans properly

Staff members must investigate reports carefully and follow the correct ban procedures.`
    },
    {
      title: "Macro Abuse / Package Abuse",
      content: `MACRO ABUSE

Macro abuse occurs when a player continuously shoots without stopping their macro.

PACKAGE ABUSE

Package abuse occurs when a player uses a small avatar package to exploit the game's hitbox.

Both offences follow the same punishment procedure.

First Offence — Warning:
/warn PLAYER reason

Continued Offence — 1-Day Temporary Ban:
/tempban PLAYER 1d reason

A warning must be issued before escalating to a temporary ban.`
    },
    {
      title: "Crouch Macro vs Macro Abuse",
      content: `CROUCH MACRO — PERMITTED

Crouch macro involves shooting and then crouching using a macro.

Players may repeat this action. Crouch macro is permitted.

MACRO ABUSE — PROHIBITED

Macro abuse involves continuously shooting without stopping the macro, rather than using the permitted crouch macro technique.

First Offence:
/warn PLAYER reason

Continued Offence:
/tempban PLAYER 1d reason

Staff must distinguish between these two actions before issuing punishments.`
    },
    {
      title: "Misusing Admin Commands",
      content: `Staff commands must only be used for legitimate moderation purposes.

Examples of misuse include:

• Using /god when not observing a cheater
• Using /join for reasons unrelated to finding cheaters
• Using /heal for personal benefit
• Using /kick without a valid reason
• Using /bring or /to without a valid reason

Misusing administrative commands may result in a strike.`
    },
    {
      title: "Staff Reports",
      content: `Only HR+ members are permitted to speak in staff reports.

Any staff member below HR who speaks in a staff report will receive a strike, regardless of whether the report concerns them.

Speaking in a staff report after being informed that the report concerns you will also result in a strike.

Staff must allow HR+ to investigate reports without interference.`
    },
    {
      title: "Inactive Tickets",
      content: `Staff members are responsible for attending to tickets they have claimed.

If a claimed ticket remains inactive for 30 minutes or longer, the claiming staff member will receive a strike.

After 30 minutes of inactivity, another staff member may take over the ticket.`
    },
    {
      title: "Dual Staffing",
      content: `Staff members are prohibited from staffing another remake while actively staffing Zes Hood.

All staff members must follow the server's dual-staffing restrictions.`
    },
    {
      title: "Staff Vouches",
      content: `Staff members must ensure that vouches are recorded correctly.

Receiving multiple staff vouches from the same ticket may result in a strike.

Staff members remain responsible for their vouches even if they were unaware that multiple vouches had been submitted.`
    },
    {
      title: "Staff Age Requirement",
      content: `All Zes Hood staff members must be at least 16 years old.`
    },
    {
      title: "Panel & Aimviewer Requirements",
      content: `Staff members MUST provide 2 valid panel aimviewer clips when banning players for:

• Lock
• Silent Aim
• Cam Lock

Banning a player for any of these offences without 2 valid panel aimviewer clips will result in a strike.

No exceptions.

All evidence must be collected using the approved panel and aimviewer.`
    }
  ],

  // STAFF ROLE RESPONSIBILITIES

  roles: [
    {
      title: "Trial Moderator",
      content: `Trial Moderators are responsible for actively moderating Zes Hood and demonstrating that they are capable of fulfilling their staff duties.

RESPONSIBILITIES

• Remain active in-game.
• Monitor players for rule violations.
• Issue appropriate in-game bans when necessary.
• Ensure every ban is supported by valid evidence.
• Record bans using the correct ban log format.
• Meet the assigned weekly quota.
• Follow all staff regulations and moderation procedures.
• Maintain professional behaviour when dealing with players.

Trial Moderators are expected to demonstrate reliability and consistent performance.`
    },
    {
      title: "Moderator",
      content: `Moderators are responsible for maintaining a fair and enjoyable in-game environment.

RESPONSIBILITIES

• Actively moderate the game.
• Investigate reports and suspicious activity.
• Issue valid in-game bans when necessary.
• Record every ban with supporting evidence.
• Meet the required weekly quota.
• Remain consistently active.
• Follow staff rules and moderation procedures.
• Assist players when appropriate.

Moderators must demonstrate consistent activity and responsible use of their permissions.`
    },
    {
      title: "Head Moderator",
      content: `Head Moderators must maintain high moderation standards and demonstrate consistent activity.

RESPONSIBILITIES

• Actively moderate Zes Hood.
• Issue appropriate in-game bans.
• Ensure all bans have valid supporting evidence.
• Complete the assigned weekly quota.
• Remain active and reliable.
• Follow all staff regulations.
• Demonstrate professionalism and responsible moderation.

Head Moderators are expected to set a positive example through their activity and conduct.`
    },
    {
      title: "Administrator",
      content: `Administrators are responsible for maintaining effective in-game moderation and following all staff procedures.

RESPONSIBILITIES

• Remain active in-game.
• Investigate and punish rule violations appropriately.
• Issue in-game bans with valid evidence.
• Record every ban accurately.
• Meet the assigned weekly quota.
• Use administrative permissions responsibly.
• Follow all staff regulations.
• Maintain professional standards.

Administrators must consistently fulfil their moderation responsibilities.`
    },
    {
      title: "Head Administrator",
      content: `Head Administrators must demonstrate a high standard of activity, professionalism and moderation.

RESPONSIBILITIES

• Actively moderate Zes Hood.
• Issue appropriate in-game bans.
• Ensure every ban has valid evidence.
• Record bans accurately and on time.
• Complete the required weekly quota.
• Remain consistently active.
• Follow all staff regulations.
• Demonstrate responsible use of administrative permissions.

Head Administrators are expected to maintain strong moderation performance.`
    },
    {
      title: "HR (High Rank)",
      content: `High Rank staff members are responsible for managing crew strikes and supervising staff performance.

RESPONSIBILITIES

• Manage and record crew strikes accurately.
• Ensure crew strike procedures are followed.
• Monitor staff activity and performance.
• Ensure moderators fulfil their assigned duties.
• Check that staff members follow regulations.
• Address misconduct and staff-related concerns.
• Ensure staff members are meeting their requirements.
• Maintain professional standards throughout the staff team.

HR members must ensure that the staff members under their supervision are performing their responsibilities correctly.`
    },
    {
      title: "Manager",
      content: `Managers are responsible for supervising lower-ranking staff members and ensuring the staff team operates effectively.

RESPONSIBILITIES

• Supervise all staff roles below Manager.
• Monitor staff activity and performance.
• Ensure lower-ranking staff fulfil their duties.
• Oversee crew strike management.
• Ensure crew strike records remain accurate.
• Address misconduct and performance concerns.
• Ensure staff members follow all regulations.
• Hold lower-ranking staff accountable for their responsibilities.

Managers must provide effective supervision and maintain staff standards.`
    },
    {
      title: "Head Manager",
      content: `Head Managers are responsible for overseeing Managers, HR members and all lower-ranking staff.

RESPONSIBILITIES

• Supervise Managers, HR and lower-ranking staff.
• Ensure management members fulfil their responsibilities.
• Oversee crew strike procedures.
• Monitor staff performance and activity.
• Ensure staff regulations are enforced correctly.
• Address problems involving lower-ranking staff.
• Maintain professional standards across the staff team.
• Ensure management decisions are handled responsibly.

Head Managers must ensure that the staff team and management structure operate effectively.`
    },
    {
      title: "Director",
      content: `Directors are responsible for supervising the staff team and ensuring all staff members follow Zes Hood regulations.

RESPONSIBILITIES

• Oversee staff conduct and performance.
• Ensure staff members follow all regulations.
• Monitor management and lower-ranking staff.
• Address serious staff-related concerns.
• Ensure staff members fulfil their responsibilities.
• Maintain professional standards across the server.
• Hold staff members accountable for misconduct.

Directors must ensure the staff team operates fairly, professionally and effectively.`
    },
    {
      title: "Staff Director",
      content: `Staff Directors are responsible for overseeing the staff team and ensuring that all ranks perform their duties correctly.

RESPONSIBILITIES

• Supervise staff performance across all ranks.
• Ensure every staff member follows the regulations.
• Monitor staff activity and professionalism.
• Ensure management members fulfil their responsibilities.
• Address misconduct and failures to follow staff procedures.
• Maintain accountability throughout the staff team.
• Ensure staff standards are consistently enforced.

Staff Directors must maintain an organised and responsible staff team.`
    },
    {
      title: "Overseer",
      content: `Overseers are responsible for ensuring the entire Zes Hood staff team follows regulations and fulfils its responsibilities.

RESPONSIBILITIES

• Oversee the overall performance of the staff team.
• Ensure all staff ranks follow the rules.
• Monitor management and senior leadership.
• Ensure staff members fulfil their assigned duties.
• Address serious concerns involving staff conduct.
• Maintain accountability throughout the staff hierarchy.
• Ensure regulations are enforced consistently.
• Maintain high professional standards across Zes Hood.

Overseers must ensure the staff team and management structure operate correctly and responsibly.`
    }
  ],

  // STAR HOSTERS

  starhosters: [
    {
      title: "Star Hoster Responsibilities",
      content: `Star Hosters are responsible for organising, supervising and accurately recording star challenges.

HOSTER REQUIREMENTS

• Follow all official star challenge rules.
• Ensure challenges are conducted fairly.
• Record every challenge and its result.
• Track stars awarded or removed.
• Verify that required clips are provided.
• Monitor daily challenge limits.
• Track challenge declines and cooldowns.
• Ensure required PC checks are arranged.
• Report rule violations appropriately.

Star Hosters must remain professional and maintain accurate records.`
    },
    {
      title: "Star Defence Logs",
      content: `Star Hosters must record the result whenever a star player defends or fails to defend their star.

Each log must identify:

• The challenged star player
• The challenger
• The final score
• Whether the star was defended or lost
• The player's updated star count
• The date

Use the Star Defence Log format provided below.

Hosters must ensure that the result and star count are accurate before posting.`
    },
    {
      title: "Star Tryout Logs",
      content: `Star Hosters must record every successful star tryout.

Each log must include:

• The player awarded a star
• The tryout region
• The player's updated star count
• The date

Use the Star Tryout Log format provided below.

Hosters must verify the result before recording the award.`
    },
    {
      title: "Challenge Declines",
      content: `Star Hosters must monitor and record challenge declines.

Star players are allowed 3 challenge declines before losing a star.

Declining a challenge while not on cooldown results in losing a star, according to the challenge rules.

HOSTER RESPONSIBILITIES

• Record every decline.
• Check the player's cooldown status.
• Track the player's total declines.
• Ensure star deductions are recorded correctly.
• Report disputes or unclear situations.

All decisions must follow the official star challenge rules.`
    },
    {
      title: "Clip Verification",
      content: `Star Hosters MUST ensure every kill in a star challenge is clipped.

REQUIREMENTS

• Every kill must have a valid clip.
• Clips must be available for verification.
• Hosters must review missing or disputed evidence.
• Required evidence must be included in challenge records.

Missing required clips result in an automatic 5–0 loss under the star challenge rules.

Hosters must enforce this requirement consistently.`
    },
    {
      title: "Daily Challenge Limits",
      content: `Star Hosters must ensure players do not exceed the permitted daily challenge limit.

RULE

A maximum of 2 challenges may be completed per day.

Exceeding this limit results in losing a star.

HOSTER RESPONSIBILITIES

• Track challenges completed by each player.
• Verify whether the daily limit has been reached.
• Prevent additional challenges beyond the permitted limit.
• Record any violations and star deductions.`
    },
    {
      title: "Ducking Challenges",
      content: `Star Hosters must monitor players who avoid or refuse challenges.

Ducking is only permitted when the player has an excusable reason.

HOSTER RESPONSIBILITIES

• Record relevant challenge refusals.
• Check whether the player has a valid reason.
• Monitor repeated avoidance.
• Report violations of the ducking rules.
• Apply the official challenge procedures consistently.

Hosters must not ignore unjustified challenge avoidance.`
    },
    {
      title: "Keyboard Overlay",
      content: `Star Hosters must ensure keyboard overlays are enabled during cups.

HOSTER RESPONSIBILITIES

• Verify the keyboard overlay requirement before the cup begins.
• Ensure participants follow the requirement.
• Record and report any violations.
• Follow the applicable cup rules when issues occur.

Keyboard overlay requirements must be enforced consistently.`
    },
    {
      title: "Server & Range Selection",
      content: `The challenged star player is responsible for selecting the server and range.

HOSTER RESPONSIBILITIES

• Allow the challenged player to select the server.
• Allow the challenged player to select the range.
• Ensure the agreed settings are followed.
• Record the selected server and range.
• Resolve or report disagreements appropriately.

Hosters must not unfairly change the challenge settings.`
    },
    {
      title: "Daily Participation",
      content: `Star players must complete at least 1 challenge per day unless they have an excusable reason.

HOSTER RESPONSIBILITIES

• Monitor daily participation.
• Track completed challenges.
• Record valid excuses when provided.
• Identify players who fail to meet the requirement.
• Report participation violations appropriately.

Star Hosters must ensure activity requirements are monitored fairly.`
    },
    {
      title: "PC Check Requirements",
      content: `Star Hosters must monitor challenge, war and tryout results to ensure required PC checks are arranged.

PC CHECK REQUIREMENTS

• After every second challenge won.
• After every second war won.
• After each tryout won, as specified in the star rules.

HOSTER RESPONSIBILITIES

• Track challenge wins.
• Track war wins.
• Record tryout wins.
• Identify when a PC check is required.
• Arrange the required check through authorised staff.
• Record whether the check has been completed.

Hosters must not ignore or bypass required checks.`
    }
  ],

  // TICKET SYSTEM

  tickets: [
    {
      title: "Ticket Handling",
      content: `All staff members must handle tickets professionally and respectfully.

Players should receive appropriate assistance, and reports must be investigated carefully.

Staff members are expected to:

• Respond clearly and respectfully
• Remain patient throughout investigations
• Follow the correct ticket procedures
• Provide accurate information
• Ensure the player's issue has been addressed before closing the ticket

Tickets must be handled fairly and responsibly.`
    },
    {
      title: "Prohibited Actions",
      content: `Staff members must not:

• Claim multiple tickets unless an exception applies
• Leave claimed tickets unattended for 30 minutes or longer
• Speak without Permission to Speak (PTS), unless permitted
• Disrespect players or other staff members
• Open tickets on behalf of other staff members
• Speak in staff reports unless they are HR+

Failure to follow these procedures may result in disciplinary action.`
    },
    {
      title: "Permitted Actions",
      content: `Staff members may:

• Speak without PTS when directly mentioned
• Claim multiple tickets when no other staff members are available
• Take over a claimed ticket after 30 minutes of inactivity

All other ticket-handling rules must still be followed.`
    },
    {
      title: "Ticket Organisation",
      content: `All tickets must be named appropriately using the /rename command.

PLAYER REPORT

Rename the ticket to the relevant player's username.

HR ASSISTANCE

Rename the ticket to:
hr-needed

GENERAL SUPPORT

Use a clear name that identifies the player's request.

Tickets must be resolved before being closed.`
    },
    {
      title: "Inactive Tickets",
      content: `If a claimed ticket remains inactive for 30 minutes or longer, the staff member responsible will receive a strike.

Another staff member may then take over the ticket and continue assisting the player.

Staff members should not claim tickets they are unable to attend to.`
    },
    {
      title: "Staff Reports in Tickets",
      content: `Only HR+ members may speak in staff reports.

Any staff member below HR who speaks in a staff report will receive a strike.

Speaking in a report after being informed that the report concerns you will also result in a strike.

Staff reports must be handled by authorised HR+ members.`
    }
  ],

  // BAN LOGGING

  bans: [
    {
      title: "Ban Logging Requirements",
      content: `Every ban must be documented accurately.

Ban logs must identify the banned player, the reason for the punishment, and the supporting evidence.

Staff members must ensure all required information is included before submitting a ban log.`
    },
    {
      title: "Required Ban Log Fields",
      content: `Every ban log must contain:

User: The banned player's username

Reason: The reason for the ban

Evidence: The attached clip or evidence link

Always leave a space after User: before entering the username.

Do not submit incomplete or misleading ban logs.`
    },
    {
      title: "Panel & Aimviewer Clips",
      content: `Staff MUST obtain 2 valid panel aimviewer clips before banning a player for:

• Lock
• Silent Aim
• Cam Lock

Banning for these offences without the required 2 clips will result in a strike.

No exceptions.

Evidence must be collected through the approved panel and aimviewer.`
    },
    {
      title: "Ban Timing",
      content: `Staff members must log all bans within 5 minutes of issuing them.

Failure to do so may result in disciplinary action.`
    },
    {
      title: "In-Game Ban Commands",
      content: `When banning players in-game, staff must include the exact text /zes to appeal at the end of the command.

PERMANENT BAN

/gban USER reason /zes to appeal

TEMPORARY BAN

/tempban USER duration reason /zes to appeal

The text /zes to appeal is part of the ban command, not a separate command.

Always use the correct reason and duration.`
    },
    {
      title: "Evidence Standards",
      content: `Evidence must clearly support the offence being punished.

Staff should review clips carefully and avoid issuing punishments based on unclear or incomplete evidence.

If a situation is uncertain, seek assistance from HR before issuing a ban.

The Ban Evidence Library contains reference clips to help staff understand different offences.

Reference clips do not replace evidence collected from the player being investigated.`
    }
  ],

  // PROMOTIONS & QUOTAS

  promotions: [
    {
      title: "Chat Moderator → Head Chat Moderator",
      content: `Requirements:

100 chat logs AND 50 staff vouches.`
    },
    {
      title: "Trial Moderator → Moderator",
      content: `Requirements:

25 ban requests OR 15 staff vouches.`
    },
    {
      title: "Moderator → Head Moderator",
      content: `Requirements:

250 combined ban logs and vouches.`
    },
    {
      title: "Head Moderator → Administrator",
      content: `Requirements:

425 combined ban logs and vouches.`
    },
    {
      title: "Administrator → Head Administrator",
      content: `Requirements:

650 combined ban logs and vouches.`
    },
    {
      title: "Head Administrator → HR",
      content: `Requirements:

700+ bans and vouches.

Promotion to HR also requires selection by management.`
    },
    {
      title: "Normal Weekly Quota",
      content: `The standard weekly quota is:

65 bans
45 vouches

Staff members who fail to complete their required weekly quota will receive a strike.`
    },
    {
      title: "CCU-Based Quota",
      content: `75 CCU

No quota.

100 CCU

One-third quota:
22 bans and 15 vouches.

150–200 CCU

Two-thirds quota:
39+ bans and 30 vouches.

200–250+ CCU

Full quota:
65 bans and 45 vouches.

The published ranges overlap at exactly 200 CCU. Management must confirm which quota applies at that boundary.`
    },
    {
      title: "Strike Removal After Promotion",
      content: `One strike is removed after each promotion.

Head Administrators may have one strike removed for every 100 bans.`
    }
  ],

  // LOA SYSTEM

  loa: [
    {
      title: "LOA Requirements",
      content: `Staff members may take a maximum of 1 Leave of Absence (LOA) per week.

The standard maximum duration is 3 days.

Longer LOA requests require HR approval.

All LOA requests must be submitted through the correct process.`
    },
    {
      title: "1-Day LOA",
      content: `Reduced weekly quota:

56 bans
39 vouches`
    },
    {
      title: "2-Day LOA",
      content: `Reduced weekly quota:

46 bans
33 vouches`
    },
    {
      title: "3-Day LOA",
      content: `Reduced weekly quota:

37 bans
26 vouches`
    },
    {
      title: "Normal Weekly Quota",
      content: `Without an approved LOA, the standard weekly quota is:

65 bans
45 vouches

Staff members with an approved LOA must complete the corresponding reduced quota.`
    },
    {
      title: "LOA Approval Procedures",
      content: `HR members must manually assign the LOA role after approving a request.

Do not use the r command to assign the LOA role.

Only HR members may react with a checkmark to approve LOA requests.`
    },
    {
      title: "LOA Request Format",
      content: `Discord Username:
LOA Start Date:
LOA End Date:
Duration: (1–3 Days)
Reason:`
    }
  ],

  // STRIKES & STRIPPING

  strikes: [
    {
      title: "Strike Records",
      content: `High Rank staff must check a staff member's current strike count before issuing another strike.

All strikes must be recorded accurately.

For example, a staff member already on 1/3 strikes must be updated to 2/3 after receiving another valid strike.

Repeated offences must not be recorded as a first strike.`
    },
    {
      title: "Strikeable Offences",
      content: `Staff members may receive strikes for:

• Unprofessional conduct
• Excessive arguing with HR
• False banning
• Misusing administrative commands
• Speaking in staff reports without HR+ permission
• Leaving claimed tickets inactive for 30 minutes or longer
• Receiving multiple vouches on one ticket
• Banning for Lock, Silent Aim, or Cam Lock without 2 valid panel aimviewer clips
• Missing the required weekly quota
• Other violations of staff regulations`
    },
    {
      title: "Strike Removal",
      content: `One strike is removed after each promotion.

Head Administrators may have one strike removed for every 100 bans.`
    },
    {
      title: "Staff Stripping & Rebuy Policy",
      content: `A staff member who has been stripped of their moderation position has 1 day to repurchase moderator access.

If they do not repurchase access within this timeframe, their previous bans and vouches will be reset.

Staff members who repurchase access after the deadline must restart their progression.

They must complete the Trial Moderator requirements again.`
    }
  ]
};

// ==========================================
// BAN EVIDENCE LIBRARY
// ALL SEVEN CLIPS PRESERVED
// ==========================================

const evidenceClips = [
  {
    id: "lock",
    title: "Lock",
    category: "AIM EXPLOITS",
    description: "Reference footage for identifying lock-related cheating. Two valid panel aimviewer clips are required for a ban.",
    url: "https://drive.google.com/file/d/1a3hhIg7UMzKpwro45v94W5MltS2GV8fs/view?usp=sharing"
  },
  {
    id: "silentaim",
    title: "Silent Aim",
    category: "AIM EXPLOITS",
    description: "Reference footage for identifying silent aim. Staff must collect two valid panel aimviewer clips.",
    url: "https://drive.google.com/file/d/1uDjRoE3NJy8fQjtMtxHBEFQ048K6sl13/view?usp=sharing"
  },
  {
    id: "camlock",
    title: "Cam Lock",
    category: "AIM EXPLOITS",
    description: "Reference footage for identifying cam lock violations. Two valid panel aimviewer clips are required.",
    url: "https://streamable.com/es8ih7"
  },
  {
    id: "macro",
    title: "Macro Abuse",
    category: "GAMEPLAY ABUSE",
    description: "Examples of continuous shooting without stopping the macro. This differs from permitted crouch macro.",
    url: "https://medal.tv/games/roblox/clips/nUyTN6WYacAbtTbUb?invite=cr-MSxoa0csNDczODM1MTk0"
  },
  {
    id: "package",
    title: "Package Abuse",
    category: "GAMEPLAY ABUSE",
    description: "Examples of small avatar packages being used to exploit the game's hitbox.",
    url: "https://medal.tv/games/screen-capture/clips/nVkzkqM4QtPqvAb1B?invite=cr-MSxveEMsNjAwNzg4MjY2"
  },
  {
    id: "exploiting",
    title: "Exploiting",
    category: "EXPLOITS",
    description: "Reference footage illustrating exploit-related gameplay violations.",
    url: "https://drive.google.com/file/d/1VYvWx-c62Dwzr_WboZJCBKu7nV65jLx4/view?usp=sharing"
  },
  {
    id: "hitbox",
    title: "Hitbox Expander",
    category: "EXPLOITS",
    description: "Reference footage for identifying hitbox-expanding exploits that make other players easier to hit.",
    url: "https://drive.google.com/file/d/1AebOLqYSgXgh72hpFLbh0DK3mNOmeiN-/view?usp=sharing"
  }
];

// ==========================================
// STAR LOG FORMATS
// ==========================================

const starLogFormats = {
  defenceWon: `@Star Player has successfully defended their star against challenger @Challenger.

Score: 5-4

@Star Player still has 3 stars to their name.

Date: MM/DD`,

  defenceLost: `@Star Player has failed to defend their star against challenger @Challenger.

Score: 4-5

@Star Player now has 2 stars to their name.

Date: MM/DD`,

  tryout: `@Player has been awarded a Star for outperforming in NA Tryouts. 🎉

@Player now has 4 stars to their name.

Date: MM/DD`
};

// ==========================================
// COMMAND FORMATS
// ==========================================

const commands = [
  {
    title: "Permanent Ban",
    command: "/gban USER reason /zes to appeal"
  },
  {
    title: "Temporary Ban",
    command: "/tempban USER duration reason /zes to appeal"
  },
  {
    title: "Macro Abuse / Package Abuse",
    command: "/warn PLAYER reason"
  },
  {
    title: "Macro Abuse / Package Abuse — Continued Offence",
    command: "/tempban PLAYER 1d reason"
  },
  {
    title: "Rename Ticket",
    command: "/rename name:"
  },
  {
    title: "Request Ticket Closure",
    command: "/closerequest"
  },
  {
    title: "Add User or Role to Ticket",
    command: "/add"
  },
  {
    title: "Close Ticket",
    command: "/close"
  },
  {
    title: "Ban Log Format",
    command: "User: (username)\nReason: (reason)\nEvidence: (clip link)"
  },
  {
    title: "LOA Request Format",
    command: "Discord Username:\nLOA Start Date:\nLOA End Date:\nDuration: (1–3 Days)\nReason:"
  },
  {
    title: "Star Defence Log — Successful Defence",
    command: starLogFormats.defenceWon
  },
  {
    title: "Star Defence Log — Failed Defence",
    command: starLogFormats.defenceLost
  },
  {
    title: "Star Tryout Log",
    command: starLogFormats.tryout
  }
];

// ==========================================
// WEBSITE ELEMENTS
// ==========================================

const content = document.getElementById("content");
const navigation = document.getElementById("navigation");
const breadcrumb = document.getElementById("breadcrumb");
const searchInput = document.getElementById("searchInput");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("mobileOverlay");

function element(tag, className = "", text = "") {
  const node = document.createElement(tag);

  if (className) {
    node.className = className;
  }

  node.textContent = text;
  return node;
}

function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

function createHeading(title, description) {
  const heading = element("div", "page-heading");

  heading.append(
    element("div", "eyebrow", "ZES HOOD / STAFF RESOURCES"),
    element("h1", "", title),
    element("p", "", description)
  );

  return heading;
}

function createNotice(text) {
  return element("div", "notice", text);
}

function createAccordion(item, open = false) {
  const details = element("details", "accordion");

  details.append(
    element("summary", "", item.title),
    element("div", "accordion-body", item.content)
  );

  details.open = open;
  return details;
}

// ==========================================
// NAVIGATION
// ==========================================

function navigate(pageId) {
  if (!sections.some(item => item.id === pageId)) {
    pageId = "overview";
  }

  const currentSection = sections.find(item => item.id === pageId);
  breadcrumb.textContent = currentSection.name;

  document.querySelectorAll(".nav-button").forEach(button => {
    const active = button.dataset.page === pageId;

    button.classList.toggle("active", active);

    if (active) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  content.replaceChildren();

  if (pageId === "overview") {
    renderOverview();
  } else if (pageId === "evidence") {
    renderEvidence();
  } else if (pageId === "commands") {
    renderCommands();
  } else if (pageId === "promotions") {
    renderPromotions();
  } else if (pageId === "loa") {
    renderLOA();
  } else if (pageId === "starhosters") {
    renderStarHosters();
  } else if (pageId === "roles") {
    renderRoles();
  } else {
    renderHandbookSection(pageId);
  }

  closeMenu();

  if (location.hash !== "#" + pageId) {
    history.replaceState(null, "", "#" + pageId);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// OVERVIEW
// ==========================================

function renderOverview() {
  const hero = element("div", "hero");
  const title = element("h1");

  title.append(
    "Welcome to the ",
    element("span", "", "Staff Handbook.")
  );

  const button = element(
    "button",
    "primary-button",
    "Explore Staff Rules →"
  );

  button.addEventListener("click", () => navigate("rules"));

  hero.append(
    element("div", "eyebrow", "ZES HOOD MODERATION"),
    title,
    element(
      "p",
      "",
      "Your central resource for staff regulations, role responsibilities, star hosting, ticket procedures, ban logging, promotions, and moderation evidence."
    ),
    button
  );

  content.append(hero);

  const heading = element("div", "section-heading");

  heading.append(
    element("h2", "", "Handbook Directory"),
    element("span", "", `${sections.length - 1} RESOURCE CATEGORIES`)
  );

  content.append(heading);

  const grid = element("div", "directory");

  sections
    .filter(section => section.id !== "overview")
    .forEach(section => {
      const card = element("button", "directory-card");

      card.append(
        element("div", "directory-icon", section.icon),
        element("h3", "", section.name),
        element("p", "", section.desc)
      );

      card.addEventListener("click", () => navigate(section.id));
      grid.append(card);
    });

  content.append(grid);
}

// ==========================================
// STANDARD HANDBOOK SECTIONS
// ==========================================

function renderHandbookSection(pageId) {
  const section = sections.find(item => item.id === pageId);

  content.append(
    createHeading(section.name, section.desc)
  );

  const list = element("div", "accordion-list");

  (handbook[pageId] || []).forEach((item, index) => {
    list.append(createAccordion(item, index === 0));
  });

  content.append(list);
}

// ==========================================
// STAFF ROLE RESPONSIBILITIES
// ==========================================

function renderRoles() {
  content.append(
    createHeading(
      "Staff Role Responsibilities",
      "Official duties and expectations for each staff rank."
    )
  );

  content.append(
    createNotice(
      "Every staff member is responsible for following Zes Hood regulations and fulfilling the duties assigned to their rank. Management and senior leadership must ensure that lower-ranking staff are performing their responsibilities correctly."
    )
  );

  const list = element("div", "accordion-list");

  handbook.roles.forEach((item, index) => {
    list.append(createAccordion(item, index === 0));
  });

  content.append(list);
}

// ==========================================
// STAR HOSTERS
// ==========================================

function renderStarHosters() {
  content.append(
    createHeading(
      "Star Hosters",
      "Official hosting responsibilities, challenge regulations, evidence requirements and logging procedures."
    )
  );

  content.append(
    createNotice(
      "Star Hosters must accurately record every challenge, enforce the official star rules, verify required evidence, and monitor challenge limits and PC check requirements."
    )
  );

  const list = element("div", "accordion-list");

  handbook.starhosters.forEach((item, index) => {
    list.append(createAccordion(item, index === 0));
  });

  content.append(list);

  const heading = element("div", "section-heading");

  heading.append(
    element("h2", "", "Star Hoster Log Formats"),
    element("span", "", "COPYABLE TEMPLATES")
  );

  content.append(heading);

  createCommandCard(
    "Star Defence Log — Successful Defence",
    starLogFormats.defenceWon
  );

  createCommandCard(
    "Star Defence Log — Failed Defence",
    starLogFormats.defenceLost
  );

  createCommandCard(
    "Star Tryout Log",
    starLogFormats.tryout
  );
}

// ==========================================
// METRICS
// ==========================================

function createMetrics(items) {
  const grid = element("div", "metrics");

  items.forEach(item => {
    const card = element("div", "metric");

    card.append(
      element("div", "metric-value", item.value),
      element("div", "metric-label", item.label)
    );

    grid.append(card);
  });

  return grid;
}

// ==========================================
// PROMOTIONS
// ==========================================

function renderPromotions() {
  content.append(
    createHeading(
      "Promotions & Quotas",
      "Promotion requirements, weekly targets and CCU-based quotas."
    )
  );

  content.append(
    createMetrics([
      { value: "65", label: "Weekly Bans" },
      { value: "45", label: "Weekly Vouches" },
      { value: "700+", label: "HR Promotion Requirement" }
    ])
  );

  const list = element("div", "accordion-list");

  handbook.promotions.forEach((item, index) => {
    list.append(createAccordion(item, index === 6));
  });

  content.append(list);
}

// ==========================================
// LOA SYSTEM
// ==========================================

function renderLOA() {
  content.append(
    createHeading(
      "Leave of Absence",
      "LOA requirements, reduced quotas and approval procedures."
    )
  );

  content.append(
    createMetrics([
      { value: "1", label: "LOA Per Week" },
      { value: "3", label: "Maximum Standard Days" },
      { value: "65 / 45", label: "Normal Bans / Vouches" }
    ])
  );

  const list = element("div", "accordion-list");

  handbook.loa.forEach((item, index) => {
    list.append(createAccordion(item, index === 0));
  });

  content.append(list);

  createCommandCard(
    "Copy LOA Request Format",
    "Discord Username:\nLOA Start Date:\nLOA End Date:\nDuration: (1–3 Days)\nReason:"
  );
}

// ==========================================
// BAN EVIDENCE LIBRARY
// ==========================================

function renderEvidence() {
  content.append(
    createHeading(
      "Ban Evidence Library",
      "Reference clips of bannable offences to help staff recognise violations."
    )
  );

  content.append(
    createNotice(
      "For Lock, Silent Aim and Cam Lock, staff MUST collect 2 valid panel aimviewer clips before issuing a ban. Library examples are for reference only and do not replace evidence collected from the player being investigated."
    )
  );

  const grid = element("div", "evidence-grid");

  evidenceClips.forEach(clip => {
    const card = element("article", "evidence-card");
    const preview = element("div", "evidence-preview");

    preview.append(element("div", "play-icon", "▶"));

    const info = element("div", "evidence-info");

    info.append(
      element("div", "evidence-tag", clip.category),
      element("h3", "", clip.title),
      element("p", "", clip.description)
    );

    const link = element("a", "evidence-link", "Watch Evidence ↗");

    link.href = clip.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    info.append(link);
    card.append(preview, info);
    grid.append(card);
  });

  content.append(grid);
}

// ==========================================
// COPYABLE COMMANDS
// ==========================================

function createCommandCard(title, command) {
  const card = element("div", "command-card");
  card.append(element("h3", "", title));

  const commandBox = element("div", "command-box");
  const code = element("code", "", command);
  const copyButton = element("button", "copy-button", "Copy");

  copyButton.addEventListener("click", () => copyText(command));

  commandBox.append(code, copyButton);
  card.append(commandBox);
  content.append(card);
}

function renderCommands() {
  content.append(
    createHeading(
      "Command Formats",
      "Copy official moderation commands, ticket commands, star hosting logs and staff templates."
    )
  );

  content.append(
    createNotice(
      "In-game ban commands must include /zes to appeal at the end. All bans must be logged within 5 minutes."
    )
  );

  commands.forEach(item => {
    createCommandCard(item.title, item.command);
  });
}

// ==========================================
// CLIPBOARD
// ==========================================

let toastTimeout;

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    showToast("Copied to clipboard!");
  } catch (error) {
    showToast("Copy unavailable. Please select the text manually.");
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ==========================================
// SEARCH
// ==========================================

function searchHandbook(query) {
  query = query.trim().toLowerCase();

  if (!query) {
    navigate("overview");
    return;
  }

  content.replaceChildren(
    createHeading("Search Results", `Results matching "${query}"`)
  );

  breadcrumb.textContent = "Search Results";

  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.remove("active");
    button.removeAttribute("aria-current");
  });

  let results = 0;

  Object.entries(handbook).forEach(([sectionId, items]) => {
    items.forEach((item, index) => {
      const text = `${item.title} ${item.content}`.toLowerCase();

      if (!text.includes(query)) return;

      results++;

      const result = element("button", "search-result");

      result.append(
        element("strong", "", item.title),
        element(
          "p",
          "",
          item.content.slice(0, 190).replaceAll("\n", " ") + "..."
        )
      );

      result.addEventListener("click", () => {
        searchInput.value = "";
        navigate(sectionId);

        const accordions = content.querySelectorAll(".accordion");

        if (accordions[index]) {
          accordions[index].open = true;

          accordions[index].scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      });

      content.append(result);
    });
  });

  evidenceClips.forEach(clip => {
    const text = `${clip.title} ${clip.category} ${clip.description}`.toLowerCase();

    if (!text.includes(query)) return;

    results++;

    const result = element("button", "search-result");

    result.append(
      element("strong", "", clip.title + " — Ban Evidence"),
      element("p", "", clip.description)
    );

    result.addEventListener("click", () => {
      searchInput.value = "";
      navigate("evidence");
    });

    content.append(result);
  });

  commands.forEach(item => {
    const text = `${item.title} ${item.command}`.toLowerCase();

    if (!text.includes(query)) return;

    results++;

    const result = element("button", "search-result");

    result.append(
      element("strong", "", item.title),
      element("p", "", item.command)
    );

    result.addEventListener("click", () => {
      searchInput.value = "";
      navigate("commands");
    });

    content.append(result);
  });

  if (results === 0) {
    content.append(
      createNotice("No matching results found. Try another search term.")
    );
  }
}

// ==========================================
// BUILD SIDEBAR
// ==========================================

sections.forEach(section => {
  const button = element("button", "nav-button");
  button.dataset.page = section.id;

  button.append(
    element("span", "nav-icon", section.icon),
    element("span", "", section.name)
  );

  button.addEventListener("click", () => {
    searchInput.value = "";
    navigate(section.id);
  });

  navigation.append(button);
});

// ==========================================
// EVENTS
// ==========================================

searchInput.addEventListener("input", event => {
  searchHandbook(event.target.value);
});

document.addEventListener("keydown", event => {
  if (
    (event.ctrlKey || event.metaKey) &&
    event.key.toLowerCase() === "k"
  ) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape") {
    searchInput.blur();
    closeMenu();
  }
});

document.getElementById("menuButton").addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", closeMenu);

window.addEventListener("hashchange", () => {
  const page = location.hash.slice(1);

  if (sections.some(section => section.id === page)) {
    searchInput.value = "";
    navigate(page);
  }
});

// ==========================================
// INITIALISE WEBSITE
// ==========================================

document.getElementById("year").textContent =
  new Date().getFullYear();

const initialPage = location.hash.slice(1);

navigate(
  sections.some(section => section.id === initialPage)
    ? initialPage
    : "overview"
);
