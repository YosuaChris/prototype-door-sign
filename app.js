/**
 * Hospital Smart Door Sign Application - Clinical Best Practice Palette
 * Standardized to JCI / KARS Patient Safety & WCAG AAA Contrast
 */

// Default data matching the user's reference image with standardized clinical coding
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
        }
      ]
    },
    {
      id: "BED C",
      label: "BED C",
      physician: "Dr. Robert Chen",
      rmo: "Dr. Gigi",
      nurse: "Ns. Dian",
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

// Standardized Clinical Vector Icons (High visual distinctiveness for dual-encoding)
const ICONS = {
  // Bed Icon (Clinical Blue)
  bed: `
    <svg class="w-10 h-10 sm:w-11 sm:h-11 text-[#0369a1] dark:text-[#38bdf8] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 19h20M2 17v2M22 17v2" />
      <path d="M2 8v9h20V12a3 3 0 0 0-3-3h-9" />
      <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  `,
  // Next Care Event Calendar (Clinical Crimson)
  calendar: `
    <svg class="w-6 h-6 sm:w-7 sm:h-7 text-[#be123c] dark:text-[#fb7185] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" ry="3"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <circle cx="8" cy="15" r="0.8" fill="currentColor"></circle>
      <circle cx="12" cy="15" r="0.8" fill="currentColor"></circle>
      <circle cx="16" cy="15" r="0.8" fill="currentColor"></circle>
    </svg>
  `,
  // Fall Risk: Triangle Warning (Standard Yellow/Amber Alert)
  fallRisk: `
    <svg class="w-6 h-6 text-[#b45309] dark:text-[#fde68a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  `,
  // NPO (Nil Per Os): Crossed Utensils / Fasting Symbol (Standard Dietary Orange/Coral)
  npo: `
    <svg class="w-6 h-6 text-[#ea580c] dark:text-[#fdba74] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  `,
  // Allergy: Medical Hazard Alert (Standard Red Wristband Alert)
  allergy: `
    <svg class="w-6 h-6 text-[#dc2626] dark:text-[#fca5a5] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  `
};

// Render Signage Board with Best Practice Clinical Styling
function renderSignage() {
  const container = document.getElementById('bedCardsContainer');
  if (!container) return;

  document.getElementById('roomNumber').textContent = state.data.roomNumber || 'ROOM 308';
  document.getElementById('wardName').textContent = state.data.wardName || 'BANGSAL DAHLIA (RAWAT INAP KELAS I)';

  container.innerHTML = state.data.beds.map((bed, index) => {
    const event = bed.careEvent || {};
    const isOverdue = (event.status || '').toLowerCase() === 'overdue';

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
        // NPO: Warm Coral / Terracotta (Clear distinction from acute allergy)
        bgClass = "bg-[#fff7ed] dark:bg-orange-950/70 border border-[#fdba74] dark:border-orange-800";
        titleClass = "text-[#7c2d12] dark:text-orange-200";
        subClass = "text-[#9a3412] dark:text-orange-300";
        icon = ICONS.npo;
      } else if (b.type === 'allergy') {
        // Allergy: Universal Medical Red
        bgClass = "bg-[#fef2f2] dark:bg-red-950/70 border border-[#fca5a5] dark:border-red-800";
        titleClass = "text-[#7f1d1d] dark:text-red-200";
        subClass = "text-[#991b1b] dark:text-red-300";
        icon = ICONS.allergy;
      }

      return `
        <div class="flex items-center gap-2.5 sm:gap-3 px-3.5 py-2 rounded-xl ${bgClass} transition-all duration-200 shadow-2xs">
          <div class="flex-shrink-0">${icon}</div>
          <div class="leading-tight">
            <h4 class="font-extrabold text-sm sm:text-base tracking-tight ${titleClass}">${b.title}</h4>
            <p class="text-[11px] font-semibold ${subClass} mt-0.5">${b.subtitle}</p>
          </div>
        </div>
      `;
    }).join('');

    return `
      <!-- BED CARD: ${bed.label} -->
      <div onclick="editSpecificBed(${index})" class="bed-card-item cursor-pointer bg-white dark:bg-slate-900 border border-[#cbd5e1] dark:border-slate-800 rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-200 hover:shadow-md relative overflow-hidden group">
        
        <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6">
          
          <!-- LEFT SECTION: Bed Identifier + Care Team -->
          <div class="flex items-center gap-4 sm:gap-6 min-w-[280px]">
            
            <!-- Bed Icon Badge Box (Clinical Deep Blue) -->
            <div class="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl bg-[#f0f7ff] dark:bg-sky-950/60 border border-[#bae6fd] dark:border-sky-800 flex flex-col items-center justify-center gap-1 sm:gap-1.5 flex-shrink-0 shadow-2xs">
              ${ICONS.bed}
              <span class="font-extrabold text-[#0369a1] dark:text-[#38bdf8] text-sm sm:text-base tracking-wider leading-none">${bed.label}</span>
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

          <!-- MIDDLE SECTION: Next Care Event Box (Clinical Crimson Alert) -->
          <div class="flex-1 max-w-sm sm:max-w-md">
            <div class="border ${isOverdue ? 'border-[#fca5a5] dark:border-rose-900/60 bg-[#fff5f5] dark:bg-rose-950/25' : 'border-sky-200 dark:border-sky-900 bg-sky-50/40 dark:bg-sky-950/20'} rounded-xl sm:rounded-2xl p-3 sm:p-4 transition-all duration-300 relative ${isOverdue ? 'animate-overdue-pulse' : ''}">
              <div>
                <h3 class="font-extrabold text-sm sm:text-base text-[#be123c] dark:text-[#fb7185] tracking-tight mb-1.5">
                  ${event.title || 'Next Care Event'}
                </h3>

                <div class="flex items-center gap-3">
                  ${ICONS.calendar}

                  <div class="flex flex-col">
                    <div class="flex items-center gap-1.5 sm:gap-2">
                      ${isOverdue ? `
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fee2e2] text-[#991b1b] border border-[#fca5a5]">
                          Overdue
                        </span>
                      ` : `
                        <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-sky-100 text-sky-800 border border-sky-300">
                          ${event.status}
                        </span>
                      `}
                      <span class="font-bold text-xs sm:text-sm md:text-base text-[#9f1239] dark:text-[#fda4af]">
                        ${event.name} • ${event.time}
                      </span>
                    </div>
                    <p class="text-[11px] text-[#be123c] dark:text-rose-300 font-medium mt-0.5">
                      ${event.note || 'Nurse attendance not recorded'}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- RIGHT SECTION: Standardized Safety Badges Stack -->
          <div class="w-full md:w-56 lg:w-60 flex flex-col gap-1.5 sm:gap-2 justify-center flex-shrink-0">
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
        btn.classList.add('ring-2', 'ring-blue-400', 'scale-110');
      } else {
        btn.classList.remove('ring-2', 'ring-blue-400', 'scale-110');
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
