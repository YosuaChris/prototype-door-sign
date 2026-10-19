/**
 * Hospital Smart Door Sign Application - Fixed 10.1" (16:10) Display Frame
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

// Preset Data for 2-Bed Hospital Room (Kelas I Standard)
const TWO_BED_ROOM_DATA = {
  roomNumber: "ROOM 306",
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
    }
  ]
};

// Preset Data for 1-Bed Executive VIP Suite (Gedung Anggrek Fl. 7)
const VIP_ROOM_DATA = {
  roomNumber: "SUITE 701",
  wardName: "ANGGREK EXECUTIVE SUITE (VIP)",
  beds: [
    {
      id: "BED VIP",
      label: "SUITE 701",
      patientCode: "RM-772910",
      physician: "Dr. Robert Chen, Sp.PD-KGEH",
      rmo: "Dr. Gigi Pratama",
      nurse: "Ns. Dian Anggraeni, S.Kep",
      visitingStatus: {
        type: "dnd",
        title: "Do Not Disturb (Istirahat Penuh)",
        note: "Pasien istirahat intensif • Kunjungan ditunda sementara"
      },
      careTimeline: [
        {
          time: "14:30",
          name: "Observasi Tanda Vital & EWS",
          status: "Overdue",
          note: "Pengukuran tekanan darah & saturasi O2",
          staff: "Ns. Dian"
        },
        {
          time: "16:00",
          name: "Visite DPJP Spesialis",
          status: "Scheduled",
          note: "Evaluasi hasil lab & USG abdomen",
          staff: "Dr. Robert Chen, Sp.PD"
        },
        {
          time: "18:00",
          name: "Terapi Antibiotik IV & Infus",
          status: "Scheduled",
          note: "Ceftriaxone 1g via IV Line drip",
          staff: "Tim Perawat Malam"
        }
      ],
      careEvent: {
        title: "Observasi Tanda Vital & EWS",
        status: "Overdue",
        name: "Vital signs",
        time: "14:30",
        note: "Nurse attendance not recorded"
      },
      badges: [
        {
          type: "fall_risk",
          title: "Fall Risk (Tinggi)",
          subtitle: "Pendampingan penuh mobilisasi • Bed rail naik",
          standard: "AHA Yellow Band"
        },
        {
          type: "npo",
          title: "NPO (Puasa Medis)",
          subtitle: "Dilarang makan & minum • Rencana USG 17:00",
          standard: "Dietary Fasting"
        },
        {
          type: "allergy",
          title: "Alergi Obat",
          subtitle: "Alergi berat: Penicillin & Cephalosporin",
          standard: "AHA Red Band"
        }
      ]
    }
  ]
};

// Global App State
const initialSavedData = JSON.parse(localStorage.getItem('hospital_door_sign_data'));
const initialData = initialSavedData || JSON.parse(JSON.stringify(DEFAULT_ROOM_DATA));

let state = {
  data: initialData,
  activeBedIndex: 0,
  privacyMode: false,
  nightMode: false,
  bezelColor: 'black',
  ledStatusIndex: 0,
  roomMode: (initialData.beds && initialData.beds.length === 1) ? 1 : ((initialData.beds && initialData.beds.length === 2) ? 2 : 3),
  twoBedLayout: 'side-by-side' // 'side-by-side' or 'stacked'
};

// Standardized Clinical Vector Icons
const ICONS = {
  crown: `
    <svg class="w-7 h-7 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
    </svg>
  `,
  bed: `
    <svg class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#0369a1] dark:text-[#38bdf8] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 19h20M2 17v2M22 17v2" />
      <path d="M2 8v9h20V12a3 3 0 0 0-3-3h-9" />
      <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  `,
  fallRisk: `
    <svg class="w-6 h-6 sm:w-6.5 sm:h-6.5 text-[#b45309] dark:text-[#fde68a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  `,
  npo: `
    <svg class="w-6 h-6 sm:w-6.5 sm:h-6.5 text-[#ea580c] dark:text-[#fdba74] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  `,
  allergy: `
    <svg class="w-6 h-6 sm:w-6.5 sm:h-6.5 text-[#dc2626] dark:text-[#fca5a5] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  `,
  moon: `
    <svg class="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#7c3aed] dark:text-[#c4b5fd] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `,
  users: `
    <svg class="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#059669] dark:text-[#6ee7b7] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `,
  family: `
    <svg class="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0284c7] dark:text-[#7dd3fc] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  `,
  procedure: `
    <svg class="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#d97706] dark:text-[#fcd34d] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3"></path>
      <path d="M9 12.5V17a3 3 0 0 0 6 0v-2.5"></path>
      <circle cx="15" cy="14.5" r="2.5"></circle>
    </svg>
  `,
  getCalendarIcon: (colorClass) => `
    <svg class="w-7 h-7 sm:w-8 sm:h-8 ${colorClass} flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    <svg class="w-7 h-7 sm:w-8 sm:h-8 ${colorClass} flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
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
 * Returns Visiting Status strip metadata
 */
function getVisitingStrip(visiting) {
  if (!visiting || visiting.type === 'none') return null;

  switch (visiting.type) {
    case 'dnd':
      return {
        stripClass: 'bg-[#f5f3ff] dark:bg-purple-950/40 border-[#ddd6fe] dark:border-purple-800/80',
        titleClass: 'text-[#4c1d95] dark:text-purple-200',
        subClass: 'text-[#6d28d9] dark:text-purple-300',
        badgeClass: 'bg-purple-100 text-purple-900 border-purple-300 dark:bg-purple-900/70 dark:text-purple-200',
        title: visiting.title || 'Do Not Disturb',
        subtitle: visiting.note || 'Patient resting • No entry',
        icon: ICONS.moon
      };
    case 'allowed':
      return {
        stripClass: 'bg-[#f0fdf4] dark:bg-emerald-950/40 border-[#bbf7d0] dark:border-emerald-800/80',
        titleClass: 'text-[#14532d] dark:text-emerald-200',
        subClass: 'text-[#15803d] dark:text-emerald-300',
        badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-900/70 dark:text-emerald-200',
        title: visiting.title || 'Visiting Allowed',
        subtitle: visiting.note || 'Max 2 visitors • Mask on',
        icon: ICONS.users
      };
    case 'family_only':
      return {
        stripClass: 'bg-[#f0f9ff] dark:bg-sky-950/40 border-[#bae6fd] dark:border-sky-800/80',
        titleClass: 'text-[#0c4a6e] dark:text-sky-200',
        subClass: 'text-[#0369a1] dark:text-sky-300',
        badgeClass: 'bg-sky-100 text-sky-900 border-sky-300 dark:bg-sky-900/70 dark:text-sky-200',
        title: visiting.title || 'Family Only',
        subtitle: visiting.note || 'Immediate family members only',
        icon: ICONS.family
      };
    case 'procedure':
      return {
        stripClass: 'bg-[#fffbeb] dark:bg-amber-950/40 border-[#fde68a] dark:border-amber-800/80',
        titleClass: 'text-[#78350f] dark:text-amber-200',
        subClass: 'text-[#b45309] dark:text-amber-300',
        badgeClass: 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-900/70 dark:text-amber-200',
        title: visiting.title || 'Procedure in Progress',
        subtitle: visiting.note || 'Medical exam • Please wait',
        icon: ICONS.procedure
      };
    default:
      return null;
  }
}

// Render Single Bed for 3-Bed Layout (Rows)
function renderThreeBedRow(bed, index) {
  const event = bed.careEvent || {};
  const theme = getCareEventTheme(event.status);
  const visiting = getVisitingStrip(bed.visitingStatus);

  const displayPhysician = state.privacyMode ? "Dr. [Terlindungi]" : bed.physician;
  const displayRMO = state.privacyMode ? "Dr. [Terlindungi]" : bed.rmo;
  const displayNurse = state.privacyMode ? "Ns. [Jaga]" : bed.nurse;

  // Badges HTML (Safety Badges: Fall Risk, NPO, Allergy)
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
      <div class="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl ${bgClass} transition-all duration-200 shadow-2xs flex-1 min-w-0 min-h-0">
        <div class="flex-shrink-0">${icon}</div>
        <div class="leading-none min-w-0 truncate">
          <h4 class="font-extrabold text-xs sm:text-sm md:text-[15px] tracking-tight ${titleClass} truncate leading-tight">${b.title}</h4>
          <p class="text-[10.5px] sm:text-xs font-semibold ${subClass} mt-1 truncate leading-tight">${b.subtitle}</p>
        </div>
      </div>
    `;
  }).join('');

  const eventIcon = theme.iconType === 'check' 
    ? ICONS.getCheckIcon(theme.iconColor) 
    : ICONS.getCalendarIcon(theme.iconColor);

  return `
    <!-- BED CARD ROW: ${bed.label} (Fixed 33.3% height, Maximized Vertical Stretch) -->
    <div onclick="editSpecificBed(${index})" class="bed-card-fixed-row cursor-pointer bg-white dark:bg-slate-900 border-2 border-[#cbd5e1] dark:border-slate-800 rounded-2xl px-4 sm:px-5 py-2.5 sm:py-3 gap-3.5 sm:gap-4 md:gap-6 shadow-2xs relative group items-stretch">
      
      <!-- LEFT: Bed ID + Care Team (Stretched Vertically) -->
      <div class="self-stretch flex items-stretch gap-3.5 sm:gap-4 md:gap-5 min-w-[260px] sm:min-w-[290px] md:min-w-[320px] flex-shrink-0">
        
        <!-- Bed Icon Box (Stretched to match card height) -->
        <div class="w-24 sm:w-28 md:w-32 self-stretch rounded-2xl bg-[#f0f7ff] dark:bg-sky-950/60 border-2 border-[#bae6fd] dark:border-sky-800 flex flex-col items-center justify-center gap-1.5 flex-shrink-0 shadow-2xs">
          ${ICONS.bed}
          <span class="font-black text-[#0369a1] dark:text-[#38bdf8] text-sm sm:text-base md:text-lg tracking-wider leading-none mt-1">${bed.label}</span>
        </div>

        <!-- Care Team Details (Evenly spaced across vertical height) -->
        <div class="self-stretch flex flex-col justify-between py-1 sm:py-1.5 min-w-0 flex-1">
          <div>
            <p class="text-[10.5px] sm:text-[11.5px] font-bold text-[#475569] dark:text-slate-400 tracking-wider uppercase leading-none">Attending physician</p>
            <h3 class="text-sm sm:text-base md:text-[17px] font-extrabold text-[#0f172a] dark:text-white leading-tight truncate mt-1">${displayPhysician}</h3>
          </div>
          <div>
            <p class="text-[10.5px] sm:text-[11.5px] font-bold text-[#475569] dark:text-slate-400 tracking-wider uppercase leading-none">Resident Medical Officer</p>
            <h3 class="text-sm sm:text-base md:text-[17px] font-extrabold text-[#0f172a] dark:text-white leading-tight truncate mt-1">${displayRMO}</h3>
          </div>
          <div>
            <p class="text-[10.5px] sm:text-[11.5px] font-bold text-[#475569] dark:text-slate-400 tracking-wider uppercase leading-none">Nurse</p>
            <h3 class="text-sm sm:text-base md:text-[17px] font-extrabold text-[#0f172a] dark:text-white leading-tight truncate mt-1">${displayNurse}</h3>
          </div>
        </div>

      </div>

      <!-- DIVIDER -->
      <div class="hidden md:block w-[1.5px] self-stretch my-1.5 bg-slate-200 dark:bg-slate-800 flex-shrink-0"></div>

      <!-- MIDDLE: Next Care Event + Visiting Status (Maximized Height, Stacked Vertically) -->
      <div class="self-stretch flex-1 min-w-[270px] sm:min-w-[320px] flex flex-col justify-between min-w-0 gap-2 sm:gap-2.5">
        
        <!-- Next Care Event Box (Expanded to fill top area) -->
        <div class="flex-1 flex flex-col justify-center border-2 ${theme.boxClass} rounded-xl sm:rounded-2xl px-3.5 sm:px-4 py-2 sm:py-2.5 transition-all duration-300 relative shadow-2xs min-h-0">
          <h3 class="font-black text-xs sm:text-sm ${theme.titleClass} tracking-tight mb-1 sm:mb-1.5 flex items-center gap-2 leading-none">
            <span>${event.title || 'Next Care Event'}</span>
            ${theme.pulseDot ? '<span class="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>' : ''}
          </h3>

          <div class="flex items-center gap-3">
            ${eventIcon}

            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-extrabold border ${theme.badgeClass}">
                  ${event.status}
                </span>
                <span class="font-extrabold text-sm sm:text-base md:text-[16px] ${theme.textClass} truncate">
                  ${event.name} • ${event.time}
                </span>
              </div>
              <p class="text-xs sm:text-[13px] ${theme.noteClass} font-semibold mt-1 truncate">
                ${event.note || 'Observation recorded'}
              </p>
            </div>
          </div>
        </div>

        <!-- Visiting Status Strip (Expanded bar directly below Next Care Event) -->
        ${visiting ? `
          <div class="flex-shrink-0 flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl ${visiting.stripClass} border-2 transition-all shadow-2xs">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="flex-shrink-0">${visiting.icon}</div>
              <div class="flex items-center gap-1.5 min-w-0 truncate">
                <span class="font-black text-xs sm:text-sm md:text-[14.5px] ${visiting.titleClass} truncate">${visiting.title}</span>
                <span class="text-[11px] sm:text-xs md:text-[13px] ${visiting.subClass} font-semibold truncate">• ${visiting.subtitle}</span>
              </div>
            </div>
            <span class="flex-shrink-0 text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${visiting.badgeClass}">
              Visiting
            </span>
          </div>
        ` : ''}

      </div>

      <!-- RIGHT: Clinical Safety Alerts Only (Stretched across full row height) -->
      <div class="self-stretch w-48 sm:w-56 md:w-68 flex flex-col justify-between gap-2 sm:gap-2.5 flex-shrink-0">
        ${badgesHtml}
      </div>

    </div>
  `;
}

// Render Single Bed for 2-Bed Side-by-Side Layout (2 Columns)
function renderTwoBedSideBySide(bed, index) {
  const event = bed.careEvent || {};
  const theme = getCareEventTheme(event.status);
  const visiting = getVisitingStrip(bed.visitingStatus);

  const displayPhysician = state.privacyMode ? "Dr. [Terlindungi]" : bed.physician;
  const displayRMO = state.privacyMode ? "Dr. [Terlindungi]" : bed.rmo;
  const displayNurse = state.privacyMode ? "Ns. [Jaga]" : bed.nurse;

  const eventIcon = theme.iconType === 'check' 
    ? ICONS.getCheckIcon(theme.iconColor) 
    : ICONS.getCalendarIcon(theme.iconColor);

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
      <div class="flex items-center gap-2.5 px-3.5 py-2 sm:py-2.5 rounded-xl ${bgClass} shadow-2xs min-w-0">
        <div class="flex-shrink-0">${icon}</div>
        <div class="leading-none min-w-0 truncate">
          <h4 class="font-extrabold text-xs sm:text-sm tracking-tight ${titleClass} truncate leading-tight">${b.title}</h4>
          <p class="text-[10.5px] sm:text-xs font-semibold ${subClass} mt-0.5 truncate leading-tight">${b.subtitle}</p>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div onclick="editSpecificBed(${index})" class="bed-card-fixed-col cursor-pointer bg-white dark:bg-slate-900 border-2 border-[#cbd5e1] dark:border-slate-800 rounded-2xl p-4 sm:p-5 gap-3 sm:gap-3.5 shadow-2xs relative group">
      
      <!-- TOP: Bed ID Header + Visiting Status -->
      <div class="flex items-center justify-between gap-2.5 pb-2.5 sm:pb-3 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center gap-2.5 sm:gap-3">
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#f0f7ff] dark:bg-sky-950/60 border-2 border-[#bae6fd] dark:border-sky-800 flex flex-col items-center justify-center gap-0.5 shadow-2xs flex-shrink-0">
            ${ICONS.bed}
            <span class="font-black text-[#0369a1] dark:text-[#38bdf8] text-xs sm:text-sm tracking-wider leading-none">${bed.label}</span>
          </div>
          <div>
            <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">STATUS BED</span>
            <div class="flex items-center gap-1.5 mt-0.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-xs sm:text-sm font-black text-slate-800 dark:text-slate-100">Occupied (Terisi)</span>
            </div>
          </div>
        </div>

        ${visiting ? `
          <div class="flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-xl ${visiting.stripClass} border-2 shadow-2xs max-w-[200px] sm:max-w-[230px]">
            <div class="flex-shrink-0">${visiting.icon}</div>
            <div class="leading-tight min-w-0 truncate">
              <h4 class="font-black text-xs sm:text-[13px] ${visiting.titleClass} truncate">${visiting.title}</h4>
              <p class="text-[10px] sm:text-[11px] font-semibold ${visiting.subClass} truncate">${visiting.subtitle}</p>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- CARE TEAM SECTION -->
      <div class="bg-slate-50/90 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/80 rounded-xl p-3 sm:p-3.5 space-y-2">
        <div class="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-0.5">
          <svg class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>
          <span>Tim Medis Pasien</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">DPJP (Dokter Utama)</span>
          <span class="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white truncate ml-2">${displayPhysician}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">Dokter Ruangan (RMO)</span>
          <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate ml-2">${displayRMO}</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-slate-500 dark:text-slate-400">Perawat Penanggung Jawab</span>
          <span class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate ml-2">${displayNurse}</span>
        </div>
      </div>

      <!-- NEXT CARE EVENT (Prominent Card) -->
      <div class="border-2 ${theme.boxClass} rounded-xl p-3 sm:p-3.5 shadow-2xs">
        <div class="flex items-center justify-between mb-1.5">
          <h3 class="font-black text-xs sm:text-[13px] ${theme.titleClass} tracking-tight flex items-center gap-1.5">
            <span>${event.title || 'Next Care Event'}</span>
            ${theme.pulseDot ? '<span class="w-2 h-2 rounded-full bg-sky-500 animate-ping"></span>' : ''}
          </h3>
          <span class="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-extrabold border ${theme.badgeClass}">
            ${event.status}
          </span>
        </div>
        <div class="flex items-center gap-2.5">
          ${eventIcon}
          <div class="min-w-0 flex-1">
            <div class="font-extrabold text-xs sm:text-sm md:text-base ${theme.textClass} truncate">
              ${event.name} • ${event.time}
            </div>
            <p class="text-[11px] sm:text-xs ${theme.noteClass} font-semibold mt-0.5 truncate">
              ${event.note || 'Observation recorded'}
            </p>
          </div>
        </div>
      </div>

      <!-- CLINICAL SAFETY ALERTS (Stacked at bottom) -->
      <div class="flex-1 flex flex-col justify-end space-y-1.5 min-h-0">
        <div class="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1">
          <svg class="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
          <span>Indikator Keselamatan Pasien</span>
        </div>
        <div class="flex flex-col gap-1.5">
          ${badgesHtml}
        </div>
      </div>

    </div>
  `;
}

// Render Single Bed for 2-Bed Stacked Layout (2 Rows)
function renderTwoBedStacked(bed, index) {
  const event = bed.careEvent || {};
  const theme = getCareEventTheme(event.status);
  const visiting = getVisitingStrip(bed.visitingStatus);

  const displayPhysician = state.privacyMode ? "Dr. [Terlindungi]" : bed.physician;
  const displayRMO = state.privacyMode ? "Dr. [Terlindungi]" : bed.rmo;
  const displayNurse = state.privacyMode ? "Ns. [Jaga]" : bed.nurse;

  const eventIcon = theme.iconType === 'check' 
    ? ICONS.getCheckIcon(theme.iconColor) 
    : ICONS.getCalendarIcon(theme.iconColor);

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
      <div class="flex items-center gap-3 px-4 py-2.5 rounded-xl ${bgClass} shadow-2xs flex-1 min-w-0 min-h-0">
        <div class="flex-shrink-0">${icon}</div>
        <div class="leading-none min-w-0 truncate">
          <h4 class="font-extrabold text-sm sm:text-base tracking-tight ${titleClass} truncate leading-tight">${b.title}</h4>
          <p class="text-xs font-semibold ${subClass} mt-1 truncate leading-tight">${b.subtitle}</p>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div onclick="editSpecificBed(${index})" class="bed-card-fixed-row cursor-pointer bg-white dark:bg-slate-900 border-2 border-[#cbd5e1] dark:border-slate-800 rounded-2xl px-5 py-3.5 gap-6 shadow-2xs relative group items-stretch">
      
      <!-- LEFT: Bed ID + Care Team -->
      <div class="self-stretch flex items-stretch gap-5 min-w-[310px] sm:min-w-[340px] flex-shrink-0">
        <div class="w-28 sm:w-32 self-stretch rounded-2xl bg-[#f0f7ff] dark:bg-sky-950/60 border-2 border-[#bae6fd] dark:border-sky-800 flex flex-col items-center justify-center gap-2 flex-shrink-0 shadow-2xs">
          ${ICONS.bed}
          <span class="font-black text-[#0369a1] dark:text-[#38bdf8] text-base sm:text-lg tracking-wider leading-none mt-1">${bed.label}</span>
          <span class="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">TERISI</span>
        </div>

        <div class="self-stretch flex flex-col justify-between py-1 min-w-0 flex-1">
          <div>
            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">Attending physician (DPJP)</p>
            <h3 class="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight truncate mt-1">${displayPhysician}</h3>
          </div>
          <div>
            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">Resident Medical Officer</p>
            <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight truncate mt-1">${displayRMO}</h3>
          </div>
          <div>
            <p class="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none">Nurse In Charge</p>
            <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight truncate mt-1">${displayNurse}</h3>
          </div>
        </div>
      </div>

      <div class="hidden md:block w-[1.5px] self-stretch my-2 bg-slate-200 dark:bg-slate-800 flex-shrink-0"></div>

      <!-- MIDDLE: Next Care Event + Visiting Status -->
      <div class="self-stretch flex-1 min-w-[320px] flex flex-col justify-between gap-3 min-w-0">
        <div class="flex-1 flex flex-col justify-center border-2 ${theme.boxClass} rounded-2xl px-4 py-3 shadow-2xs min-h-0">
          <div class="flex items-center justify-between mb-1.5">
            <h3 class="font-black text-sm ${theme.titleClass} tracking-tight flex items-center gap-2">
              <span>${event.title || 'Next Care Event'}</span>
              ${theme.pulseDot ? '<span class="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>' : ''}
            </h3>
            <span class="px-2.5 py-0.5 rounded-md text-xs font-black border ${theme.badgeClass}">${event.status}</span>
          </div>
          <div class="flex items-center gap-3">
            ${eventIcon}
            <div class="min-w-0 flex-1">
              <div class="font-black text-base sm:text-lg ${theme.textClass} truncate">${event.name} • ${event.time}</div>
              <p class="text-xs sm:text-sm ${theme.noteClass} font-semibold mt-1 truncate">${event.note || 'Observation recorded'}</p>
            </div>
          </div>
        </div>

        ${visiting ? `
          <div class="flex-shrink-0 flex items-center justify-between px-4 py-2.5 rounded-xl ${visiting.stripClass} border-2 shadow-2xs">
            <div class="flex items-center gap-3 min-w-0">
              <div class="flex-shrink-0">${visiting.icon}</div>
              <div class="flex items-center gap-2 min-w-0 truncate">
                <span class="font-black text-sm ${visiting.titleClass} truncate">${visiting.title}</span>
                <span class="text-xs ${visiting.subClass} font-semibold truncate">• ${visiting.subtitle}</span>
              </div>
            </div>
            <span class="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${visiting.badgeClass}">Visiting</span>
          </div>
        ` : ''}
      </div>

      <!-- RIGHT: Clinical Safety Alerts -->
      <div class="self-stretch w-56 sm:w-68 flex flex-col justify-between gap-2.5 flex-shrink-0">
        ${badgesHtml}
      </div>

    </div>
  `;
}

// Render Single Bed for 1-Bed Executive VIP Layout (Dual-Panel Concierge)
function renderVipRoom(bed, index) {
  const event = bed.careEvent || {};
  const theme = getCareEventTheme(event.status);
  const visiting = getVisitingStrip(bed.visitingStatus);

  const displayPhysician = state.privacyMode ? "Dr. [Terlindungi]" : (bed.physician || "Dr. Robert Chen, Sp.PD-KGEH");
  const displayRMO = state.privacyMode ? "Dr. [Terlindungi]" : (bed.rmo || "Dr. Gigi Pratama");
  const displayNurse = state.privacyMode ? "Ns. [Jaga]" : (bed.nurse || "Ns. Dian Anggraeni, S.Kep");

  const timeline = bed.careTimeline || [
    {
      time: "14:30",
      name: "Observasi Tanda Vital & EWS",
      status: "Overdue",
      note: "Pengukuran tekanan darah & saturasi O2",
      staff: displayNurse
    },
    {
      time: "16:00",
      name: "Visite DPJP Spesialis",
      status: "Scheduled",
      note: "Evaluasi hasil lab & USG abdomen",
      staff: displayPhysician
    },
    {
      time: "18:00",
      name: "Terapi Antibiotik IV & Infus",
      status: "Scheduled",
      note: "Ceftriaxone 1g via IV Line drip",
      staff: "Tim Perawat Malam"
    }
  ];

  const badgesHtml = (bed.badges || []).map(b => {
    let bgClass = "bg-[#fffbeb] dark:bg-amber-950/70 border-2 border-[#fcd34d] dark:border-amber-800";
    let titleClass = "text-[#78350f] dark:text-amber-200";
    let subClass = "text-[#92400e] dark:text-amber-300";
    let standardBadge = "bg-amber-200/80 dark:bg-amber-900 text-amber-900 dark:text-amber-200 border-amber-300 dark:border-amber-700";
    let icon = ICONS.fallRisk;

    if (b.type === 'npo') {
      bgClass = "bg-[#fff7ed] dark:bg-orange-950/70 border-2 border-[#fdba74] dark:border-orange-800";
      titleClass = "text-[#7c2d12] dark:text-orange-200";
      subClass = "text-[#9a3412] dark:text-orange-300";
      standardBadge = "bg-orange-200/80 dark:bg-orange-900 text-orange-900 dark:text-orange-200 border-orange-300 dark:border-orange-700";
      icon = ICONS.npo;
    } else if (b.type === 'allergy') {
      bgClass = "bg-[#fef2f2] dark:bg-red-950/70 border-2 border-[#fca5a5] dark:border-red-800";
      titleClass = "text-[#7f1d1d] dark:text-red-200";
      subClass = "text-[#991b1b] dark:text-red-300";
      standardBadge = "bg-red-200/80 dark:bg-red-900 text-red-900 dark:text-red-200 border-red-300 dark:border-red-700";
      icon = ICONS.allergy;
    }

    return `
      <div class="flex items-center justify-between gap-3 px-3.5 py-2.5 sm:py-3 rounded-xl ${bgClass} shadow-2xs min-w-0">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="flex-shrink-0">${icon}</div>
          <div class="leading-none min-w-0 truncate">
            <h4 class="font-extrabold text-xs sm:text-sm tracking-tight ${titleClass} truncate leading-tight">${b.title}</h4>
            <p class="text-[11px] sm:text-xs font-semibold ${subClass} mt-1 truncate leading-tight">${b.subtitle}</p>
          </div>
        </div>
        <span class="flex-shrink-0 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${standardBadge}">
          ${b.standard || 'AHA Standard'}
        </span>
      </div>
    `;
  }).join('');

  const timelineHtml = timeline.map((item, idx) => {
    const isOverdue = (item.status || '').toLowerCase() === 'overdue';
    const isInProgress = (item.status || '').toLowerCase() === 'in progress';
    
    let borderStyle = 'border-slate-200 dark:border-slate-700/80 bg-slate-50/70 dark:bg-slate-800/40';
    let timeBadgeClass = 'bg-slate-700 text-white';
    let statusBadgeClass = 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700';

    if (isOverdue) {
      borderStyle = 'border-rose-300 dark:border-rose-900/60 bg-rose-50/80 dark:bg-rose-950/25 animate-overdue-pulse';
      timeBadgeClass = 'bg-rose-600 text-white';
      statusBadgeClass = 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-200 border-rose-300 dark:border-rose-800 animate-pulse';
    } else if (isInProgress) {
      borderStyle = 'border-sky-300 dark:border-sky-900/60 bg-sky-50/80 dark:bg-sky-950/25';
      timeBadgeClass = 'bg-sky-600 text-white';
      statusBadgeClass = 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200 border-sky-300 dark:border-sky-800';
    } else if (idx === 1) {
      borderStyle = 'border-sky-200 dark:border-sky-800/50 bg-sky-50/40 dark:bg-sky-950/15';
      timeBadgeClass = 'bg-sky-700 text-white';
      statusBadgeClass = 'bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300 border-sky-300 dark:border-sky-800';
    }

    return `
      <div class="flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl border ${borderStyle} shadow-2xs">
        <div class="flex items-center gap-2.5 min-w-0">
          <span class="flex-shrink-0 text-xs font-black font-mono px-2 py-0.5 rounded-md ${timeBadgeClass}">
            ${item.time}
          </span>
          <div class="min-w-0 truncate">
            <h4 class="font-extrabold text-xs sm:text-[13px] text-slate-900 dark:text-white truncate">${item.name}</h4>
            <p class="text-[10.5px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 truncate mt-0.5">${item.note} • ${item.staff || ''}</p>
          </div>
        </div>
        <span class="flex-shrink-0 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${statusBadgeClass}">
          ${item.status}
        </span>
      </div>
    `;
  }).join('');

  return `
    <!-- LEFT PANEL: Executive Branding, Hospitality Visiting Concierge & Care Team (col-span-6) -->
    <div onclick="editSpecificBed(${index})" class="col-span-6 flex flex-col justify-between gap-2.5 sm:gap-3 h-full overflow-hidden cursor-pointer group">
      
      <!-- HERO: Executive Suite Identity & Occupancy -->
      <div class="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-3 sm:p-3.5 border-2 border-sky-700/60 shadow-xs flex items-center justify-between gap-3">
        <div class="flex items-center gap-3">
          <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-sky-500/20 border-2 border-sky-400/50 flex flex-col items-center justify-center flex-shrink-0 shadow-inner">
            ${ICONS.crown || ''}
            <span class="font-black text-[11px] tracking-wider text-sky-200 mt-0.5">VIP</span>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-[10px] font-black uppercase tracking-widest bg-sky-500/30 text-sky-200 border border-sky-400/30 px-2 py-0.5 rounded-full">
                EXECUTIVE SUITE
              </span>
              <span class="text-[10px] font-bold text-slate-300">FL. 7</span>
            </div>
            <h3 class="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight mt-0.5">
              ${bed.label || 'SUITE 701'}
            </h3>
            <p class="text-[11px] text-sky-200/80 font-medium truncate">Kamar Perawatan VVIP Eksklusif</p>
          </div>
        </div>

        <div class="flex flex-col items-end gap-1.5 flex-shrink-0">
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>OCCUPIED</span>
          </div>
          <span class="text-[10px] text-slate-300 font-semibold flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>Perawat Siaga di Station</span>
          </span>
        </div>
      </div>

      <!-- VISITING & PRIVACY CONCIERGE STRIP -->
      ${visiting ? `
        <div class="flex items-center justify-between px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-2xl ${visiting.stripClass} border-2 shadow-2xs">
          <div class="flex items-center gap-3 min-w-0">
            <div class="flex-shrink-0 p-1 rounded-xl bg-white/60 dark:bg-slate-900/60">${visiting.icon}</div>
            <div class="leading-tight min-w-0 truncate">
              <div class="flex items-center gap-2">
                <span class="font-black text-xs sm:text-sm ${visiting.titleClass} truncate">${visiting.title}</span>
              </div>
              <p class="text-[11px] sm:text-xs font-semibold ${visiting.subClass} mt-0.5 truncate">${visiting.subtitle}</p>
            </div>
          </div>
          <span class="flex-shrink-0 text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${visiting.badgeClass}">
            Visiting Policy
          </span>
        </div>
      ` : ''}

      <!-- DEDICATED CARE TEAM CARD -->
      <div class="bg-white dark:bg-slate-900 border-2 border-[#cbd5e1] dark:border-slate-800 rounded-2xl p-3.5 sm:p-4 flex flex-col justify-between flex-1 min-h-0 shadow-2xs gap-2">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
          <div class="text-[10.5px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>
            <span>Tim Medis Dedikasi VIP</span>
          </div>
          <span class="text-[10px] font-bold text-sky-600 dark:text-sky-400">24/7 Primary Care</span>
        </div>

        <!-- DPJP Utama -->
        <div class="flex items-center justify-between gap-2 p-2 rounded-xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/50">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
              Dr
            </div>
            <div class="min-w-0 truncate">
              <span class="text-[10px] font-bold text-sky-700 dark:text-sky-300 uppercase tracking-wider block">DPJP (Dokter Spesialis Utama)</span>
              <span class="text-xs sm:text-[13px] font-black text-slate-900 dark:text-white truncate block">${displayPhysician}</span>
            </div>
          </div>
          <span class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 flex-shrink-0">Sp.PD-KGEH</span>
        </div>

        <!-- Dokter Jaga Ruangan (RMO) -->
        <div class="flex items-center justify-between gap-2 px-2 py-1">
          <div class="min-w-0 truncate">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Dokter Ruangan (RMO)</span>
            <span class="text-xs font-extrabold text-slate-800 dark:text-slate-200 truncate block">${displayRMO}</span>
          </div>
          <span class="text-[10px] font-medium text-slate-400 flex-shrink-0">Lantai 7</span>
        </div>

        <!-- Perawat Primer Penanggung Jawab -->
        <div class="flex items-center justify-between gap-2 px-2 py-1 border-t border-slate-100 dark:border-slate-800/80">
          <div class="min-w-0 truncate">
            <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Perawat Primer (Primary Nurse)</span>
            <span class="text-xs font-extrabold text-slate-800 dark:text-slate-200 truncate block">${displayNurse}</span>
          </div>
          <span class="text-[10px] font-bold text-sky-600 dark:text-sky-400 flex-shrink-0">Ext: 7011</span>
        </div>

        <!-- Bottom Concierge Station Bar -->
        <div class="mt-1 pt-1.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-semibold text-slate-500 dark:text-slate-400">
          <span class="flex items-center gap-1">
            <svg class="w-3 h-3 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
            <span>Nurse Station: Ext. 101</span>
          </span>
          <span class="text-rose-600 dark:text-rose-400 font-bold">Tombol Darurat Bedside</span>
        </div>

      </div>

    </div>

    <!-- RIGHT PANEL: Clinical Timeline & Patient Safety Precautions (col-span-6) -->
    <div onclick="editSpecificBed(${index})" class="col-span-6 flex flex-col justify-between gap-2.5 sm:gap-3 h-full overflow-hidden cursor-pointer group">
      
      <!-- TODAY'S CLINICAL CARE TIMELINE -->
      <div class="bg-white dark:bg-slate-900 border-2 border-[#cbd5e1] dark:border-slate-800 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between flex-1 min-h-0 shadow-2xs gap-2">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
          <div class="text-[10.5px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>Jadwal & Timeline Pelayanan Medis Hari Ini</span>
          </div>
          <span class="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
            EWS Terkoneksi
          </span>
        </div>

        <!-- 3 Sequential Care Items -->
        <div class="flex flex-col gap-1.5 sm:gap-2 flex-1 justify-between min-h-0">
          ${timelineHtml}
        </div>
      </div>

      <!-- PATIENT SAFETY PRECAUTIONS (JCI / KARS) -->
      <div class="bg-white dark:bg-slate-900 border-2 border-[#cbd5e1] dark:border-slate-800 rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between flex-1 min-h-0 shadow-2xs gap-2">
        <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-1.5">
          <div class="text-[10.5px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
            <span>Indikator Keselamatan Pasien (Patient Safety)</span>
          </div>
          <span class="text-[10px] font-black text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded border border-amber-300 dark:border-amber-800">
            Standard JCI / KARS
          </span>
        </div>

        <!-- Safety Badges Stack -->
        <div class="flex flex-col gap-1.5 sm:gap-2 flex-1 justify-between min-h-0">
          ${badgesHtml}
        </div>
      </div>

    </div>
  `;
}

// Update Preset Buttons Active State
function updatePresetButtons() {
  const numBeds = state.data.beds ? state.data.beds.length : 3;
  const btn3 = document.getElementById('btnPreset3Bed');
  const btn2 = document.getElementById('btnPreset2Bed');
  const btn1 = document.getElementById('btnPreset1Bed');
  const btnSide = document.getElementById('btnLayoutSideBySide');
  const btnStack = document.getElementById('btnLayoutStacked');

  if (btn3 && btn2 && btn1) {
    btn3.className = (numBeds === 3)
      ? "px-2.5 py-1 font-bold text-xs rounded-lg transition bg-sky-600 text-white shadow-xs"
      : "px-2.5 py-1 font-bold text-xs rounded-lg transition text-slate-300 hover:text-white";
    btn2.className = (numBeds === 2)
      ? "px-2.5 py-1 font-bold text-xs rounded-lg transition bg-sky-600 text-white shadow-xs"
      : "px-2.5 py-1 font-bold text-xs rounded-lg transition text-slate-300 hover:text-white";
    btn1.className = (numBeds === 1)
      ? "px-2.5 py-1 font-bold text-xs rounded-lg transition bg-sky-600 text-white shadow-xs"
      : "px-2.5 py-1 font-bold text-xs rounded-lg transition text-slate-300 hover:text-white";
  }

  if (btnSide && btnStack) {
    if (state.twoBedLayout === 'side-by-side') {
      btnSide.className = "px-2.5 py-1 font-bold text-xs rounded-lg transition bg-sky-600 text-white shadow-xs";
      btnStack.className = "px-2.5 py-1 font-bold text-xs rounded-lg transition text-slate-300 hover:text-white";
    } else {
      btnStack.className = "px-2.5 py-1 font-bold text-xs rounded-lg transition bg-sky-600 text-white shadow-xs";
      btnSide.className = "px-2.5 py-1 font-bold text-xs rounded-lg transition text-slate-300 hover:text-white";
    }
  }
}

// Preset Switcher Function
function setRoomPreset(numBeds) {
  state.roomMode = numBeds;
  if (numBeds === 1) {
    state.data = JSON.parse(JSON.stringify(VIP_ROOM_DATA));
  } else if (numBeds === 2) {
    state.data = JSON.parse(JSON.stringify(TWO_BED_ROOM_DATA));
  } else {
    state.data = JSON.parse(JSON.stringify(DEFAULT_ROOM_DATA));
  }
  state.activeBedIndex = 0;
  localStorage.setItem('hospital_door_sign_data', JSON.stringify(state.data));
  renderSignage();
}

// 2-Bed Layout Mode Switcher (Side-by-Side vs Stacked)
function setTwoBedLayout(layout) {
  state.twoBedLayout = layout;
  renderSignage();
}

// Render Signage Board inside the 16:10 fixed 10.1" frame
function renderSignage() {
  const container = document.getElementById('bedCardsContainer');
  if (!container) return;

  document.getElementById('roomNumber').textContent = state.data.roomNumber || 'ROOM 308';
  document.getElementById('wardName').textContent = state.data.wardName || 'BANGSAL DAHLIA (RAWAT INAP KELAS I)';

  const numBeds = state.data.beds ? state.data.beds.length : 3;
  const twoBedControls = document.getElementById('twoBedLayoutControls');
  const caption = document.getElementById('presentationCaption');

  updatePresetButtons();

  if (numBeds === 1) {
    if (twoBedControls) {
      twoBedControls.classList.remove('flex');
      twoBedControls.classList.add('hidden');
    }
    container.className = "flex-1 min-h-0 grid grid-cols-12 gap-3 sm:gap-4 overflow-hidden";
    container.innerHTML = renderVipRoom(state.data.beds[0], 0);
    if (caption) {
      caption.innerHTML = "🔒 <strong>Layout Kamar 1 Bed (Executive VIP Concierge):</strong> Dual-Panel Display memadukan Hospitality VIP & Timeline Pelayanan Medis Komprehensif tanpa ruang kosong.";
    }
  } else if (numBeds === 2) {
    if (twoBedControls) {
      twoBedControls.classList.remove('hidden');
      twoBedControls.classList.add('flex');
    }

    if (state.twoBedLayout === 'side-by-side') {
      container.className = "flex-1 min-h-0 grid grid-cols-2 gap-3 sm:gap-4 overflow-hidden";
      container.innerHTML = state.data.beds.map((bed, index) => renderTwoBedSideBySide(bed, index)).join('');
      if (caption) {
        caption.innerHTML = "🔒 <strong>Layout 2-Bed Kiri-Kanan (Spatial 16:10):</strong> Memetakan posisi fisik ranjang di kamar (Bed A di kiri, Bed B di kanan) dengan pemanfaatan layar penuh tanpa ruang kosong.";
      }
    } else {
      container.className = "flex-1 min-h-0 grid grid-rows-2 gap-3 sm:gap-4 overflow-hidden";
      container.innerHTML = state.data.beds.map((bed, index) => renderTwoBedStacked(bed, index)).join('');
      if (caption) {
        caption.innerHTML = "🔒 <strong>Layout 2-Bed Atas-Bawah (Expanded 16:10):</strong> Format 2 baris proporsional yang membesar memenuhi seluruh tinggi layar tablet 10.1 inci.";
      }
    }
  } else {
    if (twoBedControls) {
      twoBedControls.classList.remove('flex');
      twoBedControls.classList.add('hidden');
    }

    container.className = "flex-1 min-h-0 grid grid-rows-3 gap-2.5 sm:gap-3 overflow-hidden";
    container.innerHTML = state.data.beds.map((bed, index) => renderThreeBedRow(bed, index)).join('');
    if (caption) {
      caption.innerHTML = "🔒 <strong>Rasio 16:10 Terkunci (3 Bed):</strong> Ukuran frame dan proporsi 3 kartu bed bersifat <em>fixed</em> permanen merepresentasikan layar tablet 10.1 inci fisik (1280×800).";
    }
  }
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
    { label: "LED: Alert (Red)", color: "bg-red-500", glow: "shadow-[0_0_15px_rgba(239,68,68,0.9)]", ambient: "bg-red-500/10" },
    { label: "LED: Ready (Green)", color: "bg-emerald-500", glow: "shadow-[0_0_15px_rgba(16,185,129,0.9)]", ambient: "bg-emerald-500/10" },
    { label: "LED: Caution (Yellow)", color: "bg-amber-400", glow: "shadow-[0_0_15px_rgba(251,191,36,0.9)]", ambient: "bg-amber-400/10" }
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
  ambientGlow.className = `absolute -inset-2 ${cur.ambient} rounded-[44px] filter blur-xl opacity-70 transition-all duration-500 pointer-events-none`;
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
