
"use strict";

// ==========================================
// ZES HOOD STAFF HANDBOOK
// COMPLETE UPDATED SCRIPT.JS
// ==========================================

const sections = [
  { id: "overview", icon: "⌂", name: "Overview", desc: "Handbook home and directory" },
  { id: "rules", icon: "▤", name: "Staff Rules", desc: "Staff conduct, reports and regulations" },
  { id: "roles", icon: "♜", name: "Staff Role Responsibilities", desc: "Responsibilities for every staff rank" },
  { id: "starhosters", icon: "★", name: "Star Hosters", desc: "Star challenge hosting, logs and procedures" },
  { id: "tickets", icon: "▣", name: "Ticket System", desc: "Ticket handling and organisation" },
  { id: "bans", icon: "⬡", name: "Ban Logging", desc: "Ban evidence and logging procedures" },
  { id: "promotions", icon: "♛", name: "Promotions & Quotas", desc: "Staff progression and weekly requirements" },
  { id: "loa", icon: "◷", name: "LOA System", desc: "Leave of absence and reduced quotas" },
  { id: "strikes", icon: "⚑", name: "Strikes & Stripping", desc: "Staff disciplinary procedures" },
  { id: "evidence", icon: "▶", name: "Ban Evidence Library", desc: "Video examples of bannable offences" },
  { id: "commands", icon: "⌘", name: "Command Formats", desc: "Copyable staff commands and templates" }
];

const handbook = {
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
      title: "ESP Evidence Requirement",
      content: `Staff MUST collect 2 valid clips demonstrating ESP before banning a player for this offence.

ESP involves using unauthorised information to locate players through walls or in concealed hiding spots without a legitimate way to know their position.

Unusual player discovery alone is not enough to confirm ESP.

Review both clips carefully and seek HR assistance when the evidence is unclear.`
    },
    {
      title: "Stand Exploit Ban Requirement",
      content: `When a stand exploit is confirmed with valid evidence, both the player controlling the alternate accounts and the alternate accounts being used as stands must be banned.

Staff must verify which accounts are involved and document the evidence for each account before taking action.`
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

  roles: [
    {
      title: "Trial Moderator",
      content: `Trial Moderators are responsible for handling support tickets, investigating player reports and submitting properly documented ban requests.

RESPONSIBILITIES

• Actively claim and handle tickets.
• Investigate player reports and collect valid evidence.
• Submit in-game ban requests in the designated ban requests channel.
• Use the same format as official ban logs for every request.
• Remain active, professional and follow staff regulations.
• Work towards promotion by completing 25 ban requests OR earning 15 staff vouches.

IMPORTANT — BAN PERMISSIONS

Trial Moderators CANNOT use /ban or issue in-game bans until they receive the In-Game Moderator role.

BAN REQUEST CHANNEL

https://discord.com/channels/1521519108162719744/1525463538955714612

REQUIRED BAN REQUEST FORMAT

User: (username)
Reason: (reason)
Evidence: (clip link)

All requests must contain valid evidence.

An authorised in-game moderator must review and issue any resulting ban.`
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
      title: "Challenge Logging",
      content: `Star Hosters MUST record every star challenge.

Every log must clearly identify the players involved, the challenge result, the final score and the player's updated star count.

Hosters must use the correct format for the result:

• Star Defence Log — when a player defends or fails to defend their star.
• Star Tryout Log — when a player earns a star through tryouts.

All results must be recorded accurately.

Star Hosters must not leave challenges unlogged or submit false results.`
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
    },
    {
      title: "Star Defence Log",
      content: `Use this format when a star player successfully defends or fails to defend their star.

SUCCESSFUL DEFENCE

@Star Player has successfully defended their star against challenger @Challenger.

Score: 5-4

@Star Player still has 3 stars to their name.

Date: MM/DD

FAILED DEFENCE

@Star Player has failed to defend their star against challenger @Challenger.

Score: 3-5

@Star Player now has 2 stars to their name.

Date: MM/DD

Replace the example usernames, scores, star counts and dates with the actual results.`
    },
    {
      title: "Star Tryout Log",
      content: `Use this format when a player wins tryouts and earns a star.

@Player has been awarded a Star for outperforming in NA Tryouts. 🎉

@Player now has 4 stars to their name.

Date: MM/DD

Replace the example username, region, star count and date with the actual results.`
    }
  ],

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
      title: "ESP Ban Evidence",
      content: `Staff MUST provide 2 valid clips before banning a player for ESP.

ESP is an exploit that can reveal other players' positions through walls or in concealed locations.

Both clips must provide convincing evidence of the exploit.

Finding a hidden player does not automatically prove ESP.

Staff should investigate carefully and contact HR when uncertain.`
    },
    {
      title: "Stand Exploit Bans",
      content: `When a stand exploit is confirmed, both the controller and the alternate accounts used as stands must be banned.

Staff must identify the accounts involved and provide valid evidence.

Every affected account must be recorded accurately in the ban logs.`
    },
    {
      title: "Trial Moderator Ban Requests",
      content: `Trial Moderators cannot issue in-game bans or use /ban until they receive the In-Game Moderator role.

Instead, they must submit requests in:

https://discord.com/channels/1521519108162719744/1525463538955714612

Use the official ban log format:

User: (username)
Reason: (reason)
Evidence: (clip link)

Only authorised staff may issue the resulting ban.`
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
// BAN EVIDENCE LIBRARY — 15 CATEGORIES
// ==========================================

const evidenceClips = [
  {
    id: "lock",
    title: "Lock",
    category: "AIM EXPLOITS",
    description: "When a player uses aim assistance exploits to automatically lock their crosshair onto another player, tracking them with unnatural accuracy. Staff MUST provide 2 valid panel aimviewer clips before banning.",
    url: "https://drive.google.com/file/d/1a3hhIg7UMzKpwro45v94W5MltS2GV8fs/view?usp=sharing"
  },
  {
    id: "silentaim",
    title: "Silent Aim",
    category: "AIM EXPLOITS",
    description: "When a player's shots hit targets even though their crosshair is not properly aimed at them. Staff MUST provide 2 valid panel aimviewer clips before banning.",
    url: "https://drive.google.com/file/d/1uDjRoE3NJy8fQjtMtxHBEFQ048K6sl13/view?usp=sharing"
  },
  {
    id: "camlock",
    title: "Cam Lock",
    category: "AIM EXPLOITS",
    description: "When a player's camera automatically follows or snaps onto an opponent using unauthorised aim assistance. Staff MUST provide 2 valid panel aimviewer clips before banning.",
    url: "https://streamable.com/es8ih7"
  },
  {
    id: "macro",
    title: "Macro Abuse",
    category: "GAMEPLAY ABUSE",
    description: "When a player continuously uses a macro while shooting their weapon, gaining an unfair gameplay advantage. This differs from permitted crouch macro. First offence: warning. Continued offence: 1-day temporary ban.",
    url: "https://medal.tv/games/roblox/clips/nUyTN6WYacAbtTbUb?invite=cr-MSxoa0csNDczODM1MTk0"
  },
  {
    id: "package",
    title: "Package Abuse",
    category: "GAMEPLAY ABUSE",
    description: "When a player abuses a small avatar package to gain an unfair advantage, such as interfering with normal hit detection. First offence: warning. Continued offence: 1-day temporary ban.",
    url: "https://medal.tv/games/screen-capture/clips/nVkzkqM4QtPqvAb1B?invite=cr-MSxveEMsNjAwNzg4MjY2"
  },
  {
    id: "hitbox",
    title: "Hitbox Expander",
    category: "EXPLOITS",
    description: "When a player uses exploits to enlarge another player's hitbox, making them easier to hit. Staff must review valid evidence of the altered hit detection.",
    url: "https://drive.google.com/file/d/1AebOLqYSgXgh72hpFLbh0DK3mNOmeiN-/view?usp=sharing"
  },
  {
    id: "triggerbot",
    title: "Trigger Bot (TB)",
    category: "AIM EXPLOITS",
    description: "When a cheat automatically fires a player's weapon as soon as an opponent enters their crosshair, producing unnaturally precise firing reactions. Staff must distinguish this from legitimate player reactions.",
    url: "https://drive.google.com/file/d/1dL2TC5aE7W29AjzHYFw9kwdo2YeEQptG/view?usp=sharing"
  },
  {
    id: "orbit",
    title: "Orbit",
    category: "MOVEMENT EXPLOITS",
    description: "When an exploiter automatically moves or spins around another player in an unnatural orbit, using movement that is not normally possible in the game.",
    url: "https://drive.google.com/file/d/1sWb0ZA9HPSMoYP1O5plNuDf5-s5wNleZ/view?usp=sharing"
  },
  {
    id: "superjump",
    title: "Super Jump",
    category: "MOVEMENT EXPLOITS",
    description: "When a player uses exploits to jump significantly higher than the game's normal jumping limits. Staff should verify that the jump was not caused by a legitimate game mechanic.",
    url: "https://drive.google.com/file/d/1Tjfu6OhwrjloW_Y09aWMIu4gq6Ba2QK8/view?usp=sharing"
  },
  {
    id: "fakemacro",
    title: "Fake Macro",
    category: "GAMEPLAY ABUSE",
    description: "When a player uses macro-like movement without performing the expected crouching, emote, or animation actions. Staff must check the footage carefully to distinguish this from permitted crouch macro.",
    url: "https://drive.google.com/file/d/15FnMKfWBqzx47afxtU_4t4QmvhbAf5Ex/view?usp=sharing"
  },
  {
    id: "esp",
    title: "ESP",
    category: "VISUAL EXPLOITS",
    description: "When a player uses cheats to locate opponents through walls or in extremely concealed hiding spots without legitimate information about their location. Staff MUST provide 2 valid clips before banning for ESP.",
    url: "https://drive.google.com/file/d/14XgjP4CrGa2h6uP3pU2FnLVR77YJj1ha/view?usp=sharing"
  },
  {
    id: "stand",
    title: "Stand Exploit",
    category: "EXPLOITS",
    description: "When a player controls alternate accounts that follow or position themselves behind the main player to provide an unfair advantage. When confirmed with valid evidence, BOTH the controlling player and the stand accounts must be banned.",
    url: "https://drive.google.com/file/d/1R9D2N8skwKQC2U5FmfcFP0HTzuVt6nYa/view?usp=sharing"
  },
  {
    id: "tp",
    title: "TP (Teleport Exploit)",
    category: "MOVEMENT EXPLOITS",
    description: "When a player uses exploits to instantly teleport to another player's location instead of travelling normally. Staff should verify that the movement was not caused by lag or a legitimate teleport mechanic.",
    url: "https://drive.google.com/file/d/1466qBH2YZEaabrfvitRsSAoFg4CHTMzZ/view?usp=sharing"
  },
  {
    id: "sniperdb",
    title: "Sniper DB",
    category: "WEAPON EXPLOITS",
    description: "When an exploiter removes normal bullet spread from the Double Barrel (DB) or Tactical Shotgun (Tac), allowing shots to behave with unnatural precision. This exploit affects the DB and Tac.",
    url: "https://drive.google.com/file/d/1lJJFCf0UNuY7M3G1QpbKSup7sjeTJIh3/view?usp=sharing"
  },
  {
    id: "flyhacks",
    title: "Fly Hacks",
    category: "MOVEMENT EXPLOITS",
    description: "When a player uses exploits to fly freely around the map without any legitimate in-game flying ability. This allows unnatural movement through the air.",
    url: "https://drive.google.com/file/d/1ysB9g5lSXstf84OfUD-4VWN11GF6cXxK/view?usp=sharing"
  }
];

// ==========================================
// STAR LOG TEMPLATES
// ==========================================

const starDefenceSuccess = `@Star Player has successfully defended their star against challenger @Challenger.

Score: 5-4

@Star Player still has 3 stars to their name.

Date: MM/DD`;

const starDefenceFailure = `@Star Player has failed to defend their star against challenger @Challenger.

Score: 3-5

@Star Player now has 2 stars to their name.

Date: MM/DD`;

const starTryoutLog = `@Player has been awarded a Star for outperforming in NA Tryouts. 🎉

@Player now has 4 stars to their name.

Date: MM/DD`;

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
    title: "Trial Moderator Ban Request Format",
    command: "User: (username)\nReason: (reason)\nEvidence: (clip link)"
  },
  {
    title: "LOA Request Format",
    command: "Discord Username:\nLOA Start Date:\nLOA End Date:\nDuration: (1–3 Days)\nReason:"
  },
  {
    title: "Star Defence Log — Successful",
    command: starDefenceSuccess
  },
  {
    title: "Star Defence Log — Failed",
    command: starDefenceFailure
  },
  {
    title: "Star Tryout Log",
    command: starTryoutLog
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

  const currentSection = sections.find(
    item => item.id === pageId
  );

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

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

  button.addEventListener("click", () => {
    navigate("rules");
  });

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
    element(
      "span",
      "",
      `${sections.length - 1} RESOURCE CATEGORIES`
    )
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

      card.addEventListener("click", () => {
        navigate(section.id);
      });

      grid.append(card);
    });

  content.append(grid);
}

// ==========================================
// STANDARD HANDBOOK SECTIONS
// ==========================================

function renderHandbookSection(pageId) {
  const section = sections.find(
    item => item.id === pageId
  );

  content.append(
    createHeading(section.name, section.desc)
  );

  const list = element("div", "accordion-list");

  (handbook[pageId] || []).forEach((item, index) => {
    list.append(
      createAccordion(item, index === 0)
    );
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
      "Every staff member is responsible for following Zes Hood regulations and fulfilling the duties assigned to their rank. Trial Moderators must submit ban requests and cannot issue in-game bans until receiving the In-Game Moderator role."
    )
  );

  const list = element("div", "accordion-list");

  handbook.roles.forEach((item, index) => {
    list.append(
      createAccordion(item, index === 0)
    );
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
    list.append(
      createAccordion(item, index === 0)
    );
  });

  content.append(list);

  const heading = element("div", "section-heading");

  heading.append(
    element("h2", "", "Star Logging Formats"),
    element("span", "", "COPY & EDIT")
  );

  content.append(heading);

  content.append(
    createNotice(
      "Replace the example usernames, scores, star counts, region and dates before posting a log. Use the correct format for the result."
    )
  );

  createCommandCard(
    "Copy Star Defence Log — Successful",
    starDefenceSuccess
  );

  createCommandCard(
    "Copy Star Defence Log — Failed",
    starDefenceFailure
  );

  createCommandCard(
    "Copy Star Tryout Log",
    starTryoutLog
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
      {
        value: "65",
        label: "Weekly Bans"
      },
      {
        value: "45",
        label: "Weekly Vouches"
      },
      {
        value: "700+",
        label: "HR Promotion Requirement"
      }
    ])
  );

  const list = element("div", "accordion-list");

  handbook.promotions.forEach((item, index) => {
    list.append(
      createAccordion(item, index === 6)
    );
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
      {
        value: "1",
        label: "LOA Per Week"
      },
      {
        value: "3",
        label: "Maximum Standard Days"
      },
      {
        value: "65 / 45",
        label: "Normal Bans / Vouches"
      }
    ])
  );

  const list = element("div", "accordion-list");

  handbook.loa.forEach((item, index) => {
    list.append(
      createAccordion(item, index === 0)
    );
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
      "Lock, Silent Aim and Cam Lock require 2 valid panel aimviewer clips. ESP requires 2 valid clips. For confirmed Stand Exploit, ban both the controller and the stand accounts. Library examples are for reference only and do not replace evidence collected from the player being investigated."
    )
  );

  const grid = element("div", "evidence-grid");

  evidenceClips.forEach(clip => {
    const card = element("article", "evidence-card");

    const preview = element("div", "evidence-preview");

    preview.append(
      element("div", "play-icon", "▶")
    );

    const info = element("div", "evidence-info");

    info.append(
      element("div", "evidence-tag", clip.category),
      element("h3", "", clip.title),
      element("p", "", clip.description)
    );

    const link = element(
      "a",
      "evidence-link",
      "Watch Evidence ↗"
    );

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

  card.append(
    element("h3", "", title)
  );

  const commandBox = element("div", "command-box");

  const code = element("code", "", command);

  const copyButton = element(
    "button",
    "copy-button",
    "Copy"
  );

  copyButton.addEventListener("click", () => {
    copyText(command);
  });

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
      "In-game ban commands must include /zes to appeal at the end. All bans must be logged within 5 minutes. Trial Moderators must submit ban requests instead of issuing in-game bans."
    )
  );

  commands.forEach(item => {
    createCommandCard(item.title, item.command);
  });

  const requestLink = element(
    "a",
    "evidence-link",
    "Open Trial Moderator Ban Requests ↗"
  );

  requestLink.href =
    "https://discord.com/channels/1521519108162719744/1525463538955714612";

  requestLink.target = "_blank";
  requestLink.rel = "noopener noreferrer";

  content.append(requestLink);
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
    showToast(
      "Copy unavailable. Please select the text manually."
    );
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
    createHeading(
      "Search Results",
      `Results matching "${query}"`
    )
  );

  breadcrumb.textContent = "Search Results";

  document.querySelectorAll(".nav-button").forEach(button => {
    button.classList.remove("active");
    button.removeAttribute("aria-current");
  });

  let results = 0;

  // SEARCH HANDBOOK CONTENT

  Object.entries(handbook).forEach(([sectionId, items]) => {
    items.forEach((item, index) => {
      const searchableText =
        `${item.title} ${item.content}`.toLowerCase();

      if (!searchableText.includes(query)) {
        return;
      }

      results++;

      const result = element(
        "button",
        "search-result"
      );

      result.append(
        element("strong", "", item.title),
        element(
          "p",
          "",
          item.content
            .slice(0, 190)
            .replaceAll("\n", " ") + "..."
        )
      );

      result.addEventListener("click", () => {
        searchInput.value = "";

        navigate(sectionId);

        const accordions =
          content.querySelectorAll(".accordion");

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

  // SEARCH EVIDENCE

  evidenceClips.forEach(clip => {
    const searchableText =
      `${clip.title} ${clip.category} ${clip.description}`
        .toLowerCase();

    if (!searchableText.includes(query)) {
      return;
    }

    results++;

    const result = element(
      "button",
      "search-result"
    );

    result.append(
      element(
        "strong",
        "",
        clip.title + " — Ban Evidence"
      ),
      element("p", "", clip.description)
    );

    result.addEventListener("click", () => {
      searchInput.value = "";

      navigate("evidence");
    });

    content.append(result);
  });

  // SEARCH COMMANDS

  commands.forEach(item => {
    const searchableText =
      `${item.title} ${item.command}`.toLowerCase();

    if (!searchableText.includes(query)) {
      return;
    }

    results++;

    const result = element(
      "button",
      "search-result"
    );

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
      createNotice(
        "No matching results found. Try another search term."
      )
    );
  }
}

// ==========================================
// BUILD SIDEBAR
// ==========================================

sections.forEach(section => {
  const button = element(
    "button",
    "nav-button"
  );

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

document
  .getElementById("menuButton")
  .addEventListener("click", () => {
    sidebar.classList.toggle("open");

    overlay.classList.toggle("show");
  });

overlay.addEventListener("click", closeMenu);

window.addEventListener("hashchange", () => {
  const page = location.hash.slice(1);

  if (
    sections.some(section => section.id === page)
  ) {
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
