/**
 * Hospital Smart Door Sign Application - Clinical Event & Visiting Status System
 * Standardized to JCI / KARS Patient Safety & WCAG AAA Contrast
 */

// Default data matching the user's reference image with standardized clinical coding and visiting status
const DEFAULT_ROOM_DATA = {
  roomNumber: "ROOM 308",
  wardName: "BANGSAL DAHLIA (RAWAT INAP KELAS I)",
  beds: [
    {
      id: "BED A",
      label: "BED A",
      physician: "Dr. Robert Chen",
      rmo: "Dr. Gigi",
      nurse: "Ns. Dian",
      visitingStatus: {
        type: "dnd",
        title: "Do Not Disturb",
        note: "Patient resting • No entry"
      },
      careEvent: {
        title: "Next Care Event",
        status: "Overdue",
        name: "Vital signs",
        time: "14:30",
        note: "Nurse attendance not recorded"
      },
      badges: [
        {
          type: "fall_risk",
          title: "Fall Risk",
          subtitle: "Assist with mobility",
          standard: "AHA Yellow Band"
        },
        {
          type: "npo",
          title: "NPO",
          subtitle: "Nothing by mouth",
          standard: "Dietary Fasting"
        },
        {
          type: "allergy",
          title: "Allergy",
          subtitle: "Penicillin, shellfish",
          standard: "AHA Red Band"
        }
      ]
    },
    {
      id: "BED B",
      label: "BED B",
      physician: "Dr. Robert Chen",
      rmo: "Dr. Gigi",
      nurse: "Ns. Dian",
      visitingStatus: {
        type: "allowed",
        title: "Visiting Allowed",
        note: "Max 2 visitors • Mask on"
      },
      careEvent: {
        title: "Next Care Event",
        status: "In Progress",
        name: "Vital signs",
        time: "14:30",
        note: "Vital signs observation in progress"
      },
      badges: [
        {
          type: "fall_risk",
          title: "Fall Risk",
          subtitle: "Assist with mobility",
          standard: "AHA Yellow Band"
        },
        {
          type: "npo",
          title: "NPO",
          subtitle: "Nothing by mouth",
          standard: "Dietary Fasting"
        }
      ]
    },
    {
      id: "BED C",
      label: "BED C",
      physician: "Dr. Robert Chen",
      rmo: "Dr. Gigi",
      nurse: "Ns. Dian",
      visitingStatus: {
        type: "family_only",
        title: "Family Only",
        note: "Immediate family members only"
      },
      careEvent: {
        title: "Next Care Event",
        status: "Scheduled",
        name: "Doctor Round",
        time: "15:00",
        note: "DPJP routine check-in"
      },
      badges: [
        {
          type: "fall_risk",
          title: "Fall Risk",
          subtitle: "Assist with mobility",
          standard: "AHA Yellow Band"
        },
        {
          type: "npo",
          title: "NPO",
          subtitle: "Nothing by mouth",
          standard: "Dietary Fasting"
        }
      ]
    }
  ]
};

// Global App State
let state = {
  data: JSON.parse(localStorage.getItem('hospital_door_sign_data')) || JSON.parse(JSON.stringify(DEFAULT_ROOM_DATA)),
  activeBedIndex: 0,
  privacyMode: false,
  nightMode: false,
  bezelColor: 'black',
  ledStatusIndex: 0
};

// Standardized Clinical Vector Icons
const ICONS = {
  bed: `
    <svg class="w-10 h-10 sm:w-11 sm:h-11 text-[#0369a1] dark:text-[#38bdf8] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 19h20M2 17v2M22 17v2" />
      <path d="M2 8v9h20V12a3 3 0 0 0-3-3h-9" />
      <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  `,
  fallRisk: `
    <svg class="w-6 h-6 text-[#b45309] dark:text-[#fde68a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  `,
  npo: `
    <svg class="w-6 h-6 text-[#ea580c] dark:text-[#fdba74] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  `,
  allergy: `
    <svg class="w-6 h-6 text-[#dc2626] dark:text-[#fca5a5] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  `,
  // Moon Icon for Do Not Disturb
  moon: `
    <svg class="w-5 h-5 text-[#7c3aed] dark:text-[#c4b5fd] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `,
  // Users Icon for Visiting Allowed
  users: `
    <svg class="w-5 h-5 text-[#059669] dark:text-[#6ee7b7] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,
  // Heart Icon for Family Only
  family: `
    <svg class="w-5 h-5 text-[#0284c7] dark:text-[#7dd3fc] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  `,
  // Stethoscope Icon for Procedure in progress
  procedure: `
    <svg class="w-5 h-5 text-[#d97706] dark:text-[#fcd34d] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3"></path>
      <path d="M9 12.5V17a3 3 0 0 0 6 0v-2.5"></path>
      <circle cx="15" cy="14.5" r="2.5"></circle>
    </svg>
  `,
  getCalendarIcon: (colorClass) => `
    <svg class="w-6 h-6 sm:w-7 sm:h-7 ${colorClass} flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" ry="3"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <circle cx="8" cy="15" r="0.8" fill="currentColor"></circle>
      <circle cx="12" cy="15" r="0.8" fill="currentColor"></circle>
      <circle cx="16" cy="15" r="0.8" fill="currentColor"></circle>
    </svg>
  `,
  getCheckIcon: (colorClass) => `
    <svg class="w-6 h-6 sm:w-7 sm:h-7 ${colorClass} flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  `
};

/**
 * Returns contextual clinical theme based on care event status
 */
function getCareEventTheme(status) {
  const normStatus = (status || '').toLowerCase().trim();

  if (normStatus === 'overdue') {
    return {
      boxClass: 'border-[#fca5a5] dark:border-rose-900/60 bg-[#fff5f5] dark:bg-rose-950/25 animate-overdue-pulse',
      titleClass: 'text-[#be123c] dark:text-[#fb7185]',
      iconColor: 'text-[#be123c] dark:text-[#fb7185]',
      badgeClass: 'bg-[#fee2e2] text-[#991b1b] border-[#fca5a5] dark:bg-rose-950/80 dark:text-rose-200 dark:border-rose-800',
      textClass: 'text-[#9f1239] dark:text-[#fda4af]',
      noteClass: 'text-[#be123c] dark:text-rose-300',
      iconType: 'calendar',
      pulseDot: false
    };
  }

  if (normStatus === 'in progress' || normStatus === 'in_progress') {
    return {
      boxClass: 'border-sky-300 dark:border-sky-800 bg-sky-50/70 dark:bg-sky-950/25',
      titleClass: 'text-sky-900 dark:text-sky-200',
      iconColor: 'text-sky-600 dark:text-sky-400',
      badgeClass: 'bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-900/60 dark:text-sky-200 dark:border-sky-700',
      textClass: 'text-slate-900 dark:text-slate-100',
      noteClass: 'text-sky-700 dark:text-sky-300',
      iconType: 'calendar',
      pulseDot: true
    };
  }

  if (normStatus === 'done' || normStatus === 'completed') {
    return {
      boxClass: 'border-emerald-300 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/25',
      titleClass: 'text-emerald-900 dark:text-emerald-200',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900/60 dark:text-emerald-200 dark:border-emerald-700',
      textClass: 'text-slate-900 dark:text-slate-100',
      noteClass: 'text-emerald-700 dark:text-emerald-300',
      iconType: 'check',
      pulseDot: false
    };
  }

  return {
    boxClass: 'border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40',
    titleClass: 'text-slate-700 dark:text-slate-200',
    iconColor: 'text-slate-500 dark:text-slate-400',
    badgeClass: 'bg-slate-200/80 text-slate-700 border-slate-300 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600',
    textClass: 'text-slate-900 dark:text-slate-100',
    noteClass: 'text-slate-500 dark:text-slate-400',
    iconType: 'calendar',
    pulseDot: false
  };
}

/**
 * Returns Visiting Status badge metadata
 */
function getVisitingBadge(visiting) {
  if (!visiting || visiting.type === 'none') return null;

  switch (visiting.type) {
    case 'dnd':
      return {
        pillClass: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-950/80 dark:text-purple-200 dark:border-purple-800',
        cardClass: 'bg-[#f5f3ff] dark:bg-purple-950/70 border border-[#ddd6fe] dark:border-purple-800',
        titleClass: 'text-[#4c1d95] dark:text-purple-200',
        subClass: 'text-[#6d28d9] dark:text-purple-300',
        title: visiting.title || 'Do Not Disturb',
        subtitle: visiting.note || 'Patient resting • No entry',
        icon: ICONS.moon
      };
    case 'allowed':
      return {
        pillClass: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-200 dark:border-emerald-800',
        cardClass: 'bg-[#f0fdf4] dark:bg-emerald-950/70 border border-[#bbf7d0] dark:border-emerald-800',
        titleClass: 'text-[#14532d] dark:text-emerald-200',
        subClass: 'text-[#15803d] dark:text-emerald-300',
        title: visiting.title || 'Visiting Allowed',
        subtitle: visiting.note || 'Max 2 visitors • Mask on',
        icon: ICONS.users
      };
    case 'family_only':
      return {
        pillClass: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-950/80 dark:text-sky-200 dark:border-sky-800',
        cardClass: 'bg-[#f0f9ff] dark:bg-sky-950/70 border border-[#bae6fd] dark:border-sky-800',
        titleClass: 'text-[#0c4a6e] dark:text-sky-200',
        subClass: 'text-[#0369a1] dark:text-sky-300',
        title: visiting.title || 'Family Only',
        subtitle: visiting.note || 'Immediate family members only',
        icon: ICONS.family
      };
    case 'procedure':
      return {
        pillClass: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/80 dark:text-amber-200 dark:border-amber-800',
        cardClass: 'bg-[#fffbeb] dark:bg-amber-950/70 border border-[#fde68a] dark:border-amber-800',
        titleClass: 'text-[#78350f] dark:text-amber-200',
        subClass: 'text-[#b45309] dark:text-amber-300',
        title: visiting.title || 'Procedure in Progress',
        subtitle: visiting.note || 'Medical exam • Please wait',
        icon: ICONS.procedure
      };
    default:
      return null;
  }
}

// Render Signage Board with Best Practice Clinical Styling & Visiting Status
function renderSignage() {
  const container = document.getElementById('bedCardsContainer');
  if (!container) return;

  document.getElementById('roomNumber').textContent = state.data.roomNumber || 'ROOM 308';
  document.getElementById('wardName').textContent = state.data.wardName || 'BANGSAL DAHLIA (RAWAT INAP KELAS I)';

  container.innerHTML = state.data.beds.map((bed, index) => {
    const event = bed.careEvent || {};
    const theme = getCareEventTheme(event.status);
    const visiting = getVisitingBadge(bed.visitingStatus);

    const displayPhysician = state.privacyMode ? "Dr. [Terlindungi]" : bed.physician;
    const displayRMO = state.privacyMode ? "Dr. [Terlindungi]" : bed.rmo;
    const displayNurse = state.privacyMode ? "Ns. [Jaga]" : bed.nurse;

    // Badges HTML with Standard Clinical Colors & High Contrast
    const badgesHtml = (bed.badges || []).map(b => {
      let bgClass = "bg-[#fffbeb] dark:bg-amber-950/70 border border-[#fcd34d] dark:border-amber-800";
      let titleClass = "text-[#78350f] dark:text-amber-200";
      let subClass = "text-[#92400e] dark:text-amber-300";
      let icon = ICONS.fallRisk;

      if (b.type === 'npo') {
        bgClass = "bg-[#fff7ed] dark:bg-orange-950/70 border border-[#fdba74] dark:border-orange-800";
        titleClass = "text-[#7c2d12] dark:text-orange-200";
        subClass = "text-[#9a3412] dark:text-orange-300";
        icon = ICONS.npo;
      } else if (b.type === 'allergy') {
        bgClass = "bg-[#fef2f2] dark:bg-red-950/70 border border-[#fca5a5] dark:border-red-800";
        titleClass = "text-[#7f1d1d] dark:text-red-200";
        subClass = "text-[#991b1b] dark:text-red-300";
        icon = ICONS.allergy;
      }

      return `
        <div class="flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 sm:py-2 rounded-xl ${bgClass} transition-all duration-200 shadow-2xs">
          <div class="flex-shrink-0">${icon}</div>
          <div class="leading-tight">
            <h4 class="font-extrabold text-sm sm:text-base tracking-tight ${titleClass}">${b.title}</h4>
            <p class="text-[11px] font-semibold ${subClass} mt-0.5">${b.subtitle}</p>
          </div>
        </div>
      `;
    }).join('');

    // Visiting Status Badge in Right Column (If Do Not Disturb or active restriction)
    let visitingBadgeHtml = '';
    if (visiting && visiting.title) {
      visitingBadgeHtml = `
        <div class="flex items-center gap-2.5 sm:gap-3 px-3.5 py-1.5 sm:py-2 rounded-xl ${visiting.cardClass} transition-all duration-200 shadow-2xs">
          <div class="flex-shrink-0">${visiting.icon}</div>
          <div class="leading-tight">
            <h4 class="font-extrabold text-sm sm:text-base tracking-tight ${visiting.titleClass}">${visiting.title}</h4>
            <p class="text-[11px] font-semibold ${visiting.subClass} mt-0.5">${visiting.subtitle}</p>
          </div>
        </div>
      `;
    }

    const eventIcon = theme.iconType === 'check' 
      ? ICONS.getCheckIcon(theme.iconColor) 
      : ICONS.getCalendarIcon(theme.iconColor);

    return `
      <!-- BED CARD: ${bed.label} -->
      <div onclick="editSpecificBed(${index})" class="bed-card-item cursor-pointer bg-white dark:bg-slate-900 border border-[#cbd5e1] dark:border-slate-800 rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-200 hover:shadow-md relative overflow-hidden group">
        
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6">
          
          <!-- LEFT SECTION: Bed Identifier + Care Team -->
          <div class="flex items-center gap-4 sm:gap-6 min-w-[280px]">
            
            <!-- Bed Icon Badge Box (Clinical Deep Blue) -->
            <div class="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-[#f0f7ff] dark:bg-sky-950/60 border border-[#bae6fd] dark:border-sky-800 flex flex-col items-center justify-center gap-1 sm:gap-1.5 flex-shrink-0 shadow-2xs relative">
              ${ICONS.bed}
              <span class="font-extrabold text-[#0369a1] dark:text-[#38bdf8] text-sm sm:text-base tracking-wider leading-none">${bed.label}</span>
              ${visiting ? `
                <span class="absolute -bottom-2 px-1.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border shadow-2xs leading-none ${visiting.pillClass}">
                  ${visiting.title}
                </span>
              ` : ''}
            </div>

            <!-- Care Team Details (High Contrast Slate Hierarchy) -->
            <div class="space-y-1.5 sm:space-y-2 py-0.5">
              <div>
                <p class="text-[11px] font-semibold text-[#475569] dark:text-slate-400 tracking-tight leading-none">Attending physician</p>
                <h3 class="text-base sm:text-lg font-bold text-[#0f172a] dark:text-white leading-tight tracking-tight">${displayPhysician}</h3>
              </div>
              <div>
                <p class="text-[11px] font-semibold text-[#475569] dark:text-slate-400 tracking-tight leading-none">Resident Medical Officer</p>
                <h3 class="text-base sm:text-lg font-bold text-[#0f172a] dark:text-white leading-tight tracking-tight">${displayRMO}</h3>
              </div>
              <div>
                <p class="text-[11px] font-semibold text-[#475569] dark:text-slate-400 tracking-tight leading-none">Nurse</p>
                <h3 class="text-base sm:text-lg font-bold text-[#0f172a] dark:text-white leading-tight tracking-tight">${displayNurse}</h3>
              </div>
            </div>

          </div>

          <!-- VERTICAL DIVIDER -->
          <div class="hidden lg:block w-[1px] h-20 sm:h-24 bg-slate-200 dark:bg-slate-800 self-center flex-shrink-0"></div>

          <!-- MIDDLE SECTION: Next Care Event Box (Contextual Clinical Theming) -->
          <div class="flex-1 max-w-sm sm:max-w-md">
            <div class="border ${theme.boxClass} rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300 relative">
              <div>
                <h3 class="font-extrabold text-sm sm:text-base ${theme.titleClass} tracking-tight mb-1.5 flex items-center gap-1.5">
                  <span>${event.title || 'Next Care Event'}</span>
                  ${theme.pulseDot ? '<span class="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>' : ''}
                </h3>

                <div class="flex items-center gap-3">
                  ${eventIcon}

                  <div class="flex flex-col">
                    <div class="flex items-center gap-1.5 sm:gap-2">
                      <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold border ${theme.badgeClass}">
                        ${event.status}
                      </span>
                      <span class="font-bold text-xs sm:text-sm md:text-base ${theme.textClass}">
                        ${event.name} • ${event.time}
                      </span>
                    </div>
                    <p class="text-[11px] ${theme.noteClass} font-medium mt-0.5">
                      ${event.note || 'Observation recorded'}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- RIGHT SECTION: Standardized Safety & Visiting Badges Stack -->
          <div class="w-full md:w-56 lg:w-60 flex flex-col gap-1.5 sm:gap-2 justify-center flex-shrink-0">
            ${visitingBadgeHtml}
            ${badgesHtml}
          </div>

        </div>

      </div>
    `;
  }).join('');
}

// Set Frame Bezel Color (Black / White / Silver)
function setBezelColor(color) {
  state.bezelColor = color;
  const chassis = document.getElementById('tabletChassis');
  
  chassis.classList.remove('bezel-black', 'bezel-white', 'bezel-silver');
  chassis.classList.add(`bezel-${color}`);

  ['black', 'white', 'silver'].forEach(c => {
    const btn = document.getElementById(`bezelBtn${c.charAt(0).toUpperCase() + c.slice(1)}`);
    if (btn) {
      if (c === color) {
        btn.classList.add('ring-2', 'ring-sky-400', 'scale-110');
      } else {
        btn.classList.remove('ring-2', 'ring-sky-400', 'scale-110');
      }
    }
  });
}

// Cycle Hardware Side LED Light Bar (Hospital Standard Status Lights)
function cycleLedStatus() {
  const ledStates = [
    { label: "LED: Overdue Alert (Red)", color: "bg-red-500", glow: "shadow-[0_0_15px_rgba(239,68,68,0.9)]", ambient: "bg-red-500/10" },
    { label: "LED: Normal/Ready (Green)", color: "bg-emerald-500", glow: "shadow-[0_0_15px_rgba(16,185,129,0.9)]", ambient: "bg-emerald-500/10" },
    { label: "LED: Fall Risk Caution (Yellow)", color: "bg-amber-400", glow: "shadow-[0_0_15px_rgba(251,191,36,0.9)]", ambient: "bg-amber-400/10" }
  ];

  state.ledStatusIndex = (state.ledStatusIndex + 1) % ledStates.length;
  const cur = ledStates[state.ledStatusIndex];

  const ledBar = document.getElementById('tabletLedBar');
  const ledDot = document.getElementById('ledStatusDot');
  const ledLabel = document.getElementById('ledStatusLabel');
  const ambientGlow = document.getElementById('deviceAmbientGlow');

  ledBar.className = `absolute left-0 top-1/4 bottom-1/4 w-1.5 ${cur.color} rounded-r-md ${cur.glow} animate-pulse transition-all duration-300`;
  ledDot.className = `w-2.5 h-2.5 rounded-full ${cur.color} animate-pulse shadow-sm`;
  ledLabel.textContent = cur.label;
  ambientGlow.className = `absolute -inset-3 ${cur.ambient} rounded-[44px] filter blur-xl opacity-70 transition-all duration-500`;
}

// Toggle Night Mode inside the 10" tablet display
function toggleNightModeInside() {
  state.nightMode = !state.nightMode;
  const screen = document.getElementById('screenViewport');
  if (state.nightMode) {
    screen.classList.add('dark');
  } else {
    screen.classList.remove('dark');
  }
}

// Live Digital Clock
function updateClock() {
  const timeElem = document.getElementById('currentTime');
  const dateElem = document.getElementById('currentDate');
  if (!timeElem) return;

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeElem.textContent = `${hours}:${minutes}:${seconds}`;

  const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
  dateElem.textContent = now.toLocaleDateString('id-ID', options);
}

// Fullscreen Toggle
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.warn(err));
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
  }
}

// Editor Modal Management
function openEditorModal(bedIndex = 0) {
  state.activeBedIndex = bedIndex;
  const modal = document.getElementById('editorModal');
  const card = document.getElementById('modalCard');
  
  populateBedSelectorTabs();
  loadBedIntoForm(state.activeBedIndex);

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    card.classList.remove('scale-95');
  }, 10);
}

function closeEditorModal() {
  const modal = document.getElementById('editorModal');
  const card = document.getElementById('modalCard');
  modal.classList.add('opacity-0');
  card.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 200);
}

function editSpecificBed(index) {
  openEditorModal(index);
}

function populateBedSelectorTabs() {
  const container = document.getElementById('bedSelectorTabs');
  if (!container) return;

  container.innerHTML = state.data.beds.map((bed, idx) => `
    <button type="button" onclick="selectBedTab(${idx})" class="py-1.5 px-3 rounded-xl font-bold text-xs border transition-all ${idx === state.activeBedIndex ? 'bg-sky-600 text-white border-sky-600 shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'}">
      ${bed.label}
    </button>
  `).join('');
}

function selectBedTab(index) {
  state.activeBedIndex = index;
  populateBedSelectorTabs();
  loadBedIntoForm(index);
}

function loadBedIntoForm(index) {
  const bed = state.data.beds[index];
  if (!bed) return;

  document.getElementById('inputRoomNumber').value = state.data.roomNumber || "ROOM 308";
  document.getElementById('inputWardName').value = state.data.wardName || "BANGSAL DAHLIA";

  // Visiting status
  const visiting = bed.visitingStatus || { type: 'none', note: '' };
  document.getElementById('inputVisitingStatus').value = visiting.type || 'none';
  document.getElementById('inputVisitingNote').value = visiting.note || '';

  document.getElementById('inputPhysician').value = bed.physician;
  document.getElementById('inputRmo').value = bed.rmo;
  document.getElementById('inputNurse').value = bed.nurse;

  document.getElementById('inputEventName').value = bed.careEvent.name;
  document.getElementById('inputEventTime').value = bed.careEvent.time;
  document.getElementById('inputEventStatus').value = bed.careEvent.status;
  document.getElementById('inputEventNote').value = bed.careEvent.note;

  const badges = bed.badges || [];
  const fallRiskBadge = badges.find(b => b.type === 'fall_risk');
  const npoBadge = badges.find(b => b.type === 'npo');
  const allergyBadge = badges.find(b => b.type === 'allergy');

  document.getElementById('checkFallRisk').checked = !!fallRiskBadge;
  document.getElementById('inputFallRiskNote').value = fallRiskBadge ? fallRiskBadge.subtitle : "Assist with mobility";

  document.getElementById('checkNPO').checked = !!npoBadge;
  document.getElementById('inputNPONote').value = npoBadge ? npoBadge.subtitle : "Nothing by mouth";

  document.getElementById('checkAllergy').checked = !!allergyBadge;
  document.getElementById('inputAllergyNote').value = allergyBadge ? allergyBadge.subtitle : "Penicillin, shellfish";
}

function saveBedChanges(event) {
  event.preventDefault();

  state.data.roomNumber = document.getElementById('inputRoomNumber').value;
  state.data.wardName = document.getElementById('inputWardName').value;

  const currentBed = state.data.beds[state.activeBedIndex];
  if (!currentBed) return;

  // Save Visiting Status
  const visitType = document.getElementById('inputVisitingStatus').value;
  const visitNote = document.getElementById('inputVisitingNote').value;
  let visitTitle = 'Visiting Allowed';
  if (visitType === 'dnd') visitTitle = 'Do Not Disturb';
  else if (visitType === 'family_only') visitTitle = 'Family Only';
  else if (visitType === 'procedure') visitTitle = 'Procedure in Progress';

  currentBed.visitingStatus = {
    type: visitType,
    title: visitTitle,
    note: visitNote
  };

  currentBed.physician = document.getElementById('inputPhysician').value;
  currentBed.rmo = document.getElementById('inputRmo').value;
  currentBed.nurse = document.getElementById('inputNurse').value;

  currentBed.careEvent.name = document.getElementById('inputEventName').value;
  currentBed.careEvent.time = document.getElementById('inputEventTime').value;
  currentBed.careEvent.status = document.getElementById('inputEventStatus').value;
  currentBed.careEvent.note = document.getElementById('inputEventNote').value;

  const updatedBadges = [];
  if (document.getElementById('checkFallRisk').checked) {
    updatedBadges.push({
      type: "fall_risk",
      title: "Fall Risk",
      subtitle: document.getElementById('inputFallRiskNote').value || "Assist with mobility"
    });
  }
  if (document.getElementById('checkNPO').checked) {
    updatedBadges.push({
      type: "npo",
      title: "NPO",
      subtitle: document.getElementById('inputNPONote').value || "Nothing by mouth"
    });
  }
  if (document.getElementById('checkAllergy').checked) {
    updatedBadges.push({
      type: "allergy",
      title: "Allergy",
      subtitle: document.getElementById('inputAllergyNote').value || "Penicillin, shellfish"
    });
  }

  currentBed.badges = updatedBadges;
  localStorage.setItem('hospital_door_sign_data', JSON.stringify(state.data));

  renderSignage();
  closeEditorModal();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setBezelColor('black');
  renderSignage();
  updateClock();
  setInterval(updateClock, 1000);
});
