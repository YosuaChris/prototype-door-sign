/**
 * Hospital Smart Door Sign Application - Fixed 10" Display Kiosk
 */

// Default data matching the user's reference image exactly
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
          color: "amber"
        },
        {
          type: "npo",
          title: "NPO",
          subtitle: "Nothing by mouth",
          color: "rose"
        },
        {
          type: "allergy",
          title: "Allergy",
          subtitle: "Penicillin, shellfish",
          color: "rose"
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
          color: "amber"
        },
        {
          type: "npo",
          title: "NPO",
          subtitle: "Nothing by mouth",
          color: "rose"
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
          color: "amber"
        },
        {
          type: "npo",
          title: "NPO",
          subtitle: "Nothing by mouth",
          color: "rose"
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
  nightMode: false
};

// SVG Icons Library (Vector icons scaled for 10" kiosk)
const ICONS = {
  bed: `
    <svg class="w-8 h-8 sm:w-10 sm:h-10 text-[#2f597e] dark:text-[#7dd3fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 19h20M2 17v2M22 17v2" />
      <path d="M2 8v9h20V12a3 3 0 0 0-3-3h-9" />
      <path d="M6 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  `,
  calendar: `
    <svg class="w-6 h-6 text-[#dc2626] dark:text-[#f87171] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="3" ry="3"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  `,
  fallRisk: `
    <svg class="w-5 h-5 text-[#b45309] dark:text-[#fde68a] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  `,
  ban: `
    <svg class="w-5 h-5 text-[#b91c1c] dark:text-[#fecdd3] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
    </svg>
  `
};

// Render Signage Board
function renderSignage() {
  const container = document.getElementById('bedCardsContainer');
  if (!container) return;

  document.getElementById('roomNumber').textContent = state.data.roomNumber || 'ROOM 308';
  document.getElementById('wardName').textContent = state.data.wardName || 'BANGSAL DAHLIA (KELAS I)';

  container.innerHTML = state.data.beds.map((bed, index) => {
    const event = bed.careEvent || {};
    const isOverdue = (event.status || '').toLowerCase() === 'overdue';

    const displayPhysician = state.privacyMode ? "Dr. [Terlindungi]" : bed.physician;
    const displayRMO = state.privacyMode ? "Dr. [Terlindungi]" : bed.rmo;
    const displayNurse = state.privacyMode ? "Ns. [Jaga]" : bed.nurse;

    // Badges HTML
    const badgesHtml = (bed.badges || []).map(b => {
      let bgClass = "bg-[#fef3c7] dark:bg-amber-950/70 border border-amber-200/60 dark:border-amber-800";
      let titleClass = "text-[#92400e] dark:text-amber-200";
      let subClass = "text-[#b45309] dark:text-amber-300";
      let icon = ICONS.fallRisk;

      if (b.type === 'npo' || b.type === 'allergy') {
        bgClass = "bg-[#fee2e2] dark:bg-rose-950/70 border border-rose-200/60 dark:border-rose-800";
        titleClass = "text-[#991b1b] dark:text-rose-200";
        subClass = "text-[#b91c1c] dark:text-rose-300";
        icon = ICONS.ban;
      }

      return `
        <div class="flex items-center gap-2.5 px-3 py-1.5 rounded-xl ${bgClass} shadow-xs flex-1 min-w-0">
          <div class="flex-shrink-0">${icon}</div>
          <div class="leading-none min-w-0 truncate">
            <h4 class="font-extrabold text-xs sm:text-sm tracking-tight ${titleClass} truncate">${b.title}</h4>
            <p class="text-[10px] font-medium ${subClass} mt-0.5 truncate">${b.subtitle}</p>
          </div>
        </div>
      `;
    }).join('');

    return `
      <!-- BED CARD: ${bed.label} -->
      <div onclick="editSpecificBed(${index})" class="bed-card-item cursor-pointer bg-white dark:bg-slate-900 border border-[#d9e2ec] dark:border-slate-800 rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 flex items-center justify-between gap-3 sm:gap-6 shadow-xs relative overflow-hidden group">
        
        <!-- LEFT SECTION: Bed Identifier + Staff Info -->
        <div class="flex items-center gap-3 sm:gap-5 flex-shrink-0 min-w-[240px] sm:min-w-[280px]">
          
          <!-- Bed Icon Badge Box -->
          <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#edf4f9] dark:bg-slate-800/80 border border-[#dce7f0] dark:border-slate-700/60 flex flex-col items-center justify-center gap-1 flex-shrink-0 shadow-xs">
            ${ICONS.bed}
            <span class="font-extrabold text-[#2b5a83] dark:text-[#93c5fd] text-xs sm:text-sm tracking-wider leading-none">${bed.label}</span>
          </div>

          <!-- Care Team Details (Tight leading for 10" display) -->
          <div class="space-y-1 sm:space-y-1.5">
            <div>
              <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-none">Attending physician</p>
              <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">${displayPhysician}</h3>
            </div>
            <div>
              <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-none">Resident Medical Officer</p>
              <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">${displayRMO}</h3>
            </div>
            <div>
              <p class="text-[10px] font-semibold text-slate-500 dark:text-slate-400 leading-none">Nurse</p>
              <h3 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">${displayNurse}</h3>
            </div>
          </div>

        </div>

        <!-- VERTICAL DIVIDER -->
        <div class="hidden md:block w-[1px] h-16 bg-slate-200 dark:bg-slate-800 self-center flex-shrink-0"></div>

        <!-- MIDDLE SECTION: Next Care Event Box -->
        <div class="flex-1 max-w-sm lg:max-w-md min-w-0">
          <div class="border ${isOverdue ? 'border-[#fecaca] dark:border-rose-900/60 bg-[#fff5f5] dark:bg-rose-950/20' : 'border-blue-200 dark:border-blue-900 bg-blue-50/40 dark:bg-blue-950/20'} rounded-xl px-3 py-2 transition-all relative ${isOverdue ? 'animate-overdue-pulse' : ''}">
            <h3 class="font-extrabold text-xs sm:text-sm text-[#d32f2f] dark:text-[#f87171] tracking-tight mb-1 leading-none">
              ${event.title || 'Next Care Event'}
            </h3>

            <div class="flex items-center gap-2.5">
              ${ICONS.calendar}
              <div class="min-w-0">
                <div class="flex items-center gap-1.5">
                  ${isOverdue ? `
                    <span class="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-[#fee2e2] text-[#dc2626] border border-red-300">
                      Overdue
                    </span>
                  ` : `
                    <span class="inline-flex items-center px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-blue-100 text-blue-700">
                      ${event.status}
                    </span>
                  `}
                  <span class="font-bold text-xs sm:text-sm text-[#dc2626] dark:text-[#f87171] truncate">
                    ${event.name} • ${event.time}
                  </span>
                </div>
                <p class="text-[10px] text-[#ef4444] dark:text-red-300/80 font-medium truncate mt-0.5">
                  ${event.note || 'Nurse attendance not recorded'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT SECTION: Clinical Risk Badges Stack -->
        <div class="w-48 sm:w-56 flex flex-col gap-1 sm:gap-1.5 justify-center flex-shrink-0">
          ${badgesHtml}
        </div>

      </div>
    `;
  }).join('');
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

// Fullscreen
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.warn("Fullscreen request error:", err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Toggle Privacy Mode
function togglePrivacyMode() {
  state.privacyMode = !state.privacyMode;
  const btn = document.getElementById('privacyModeBtn');
  if (state.privacyMode) {
    btn.classList.add('bg-blue-600', 'text-white');
    btn.classList.remove('bg-slate-100', 'text-slate-600');
  } else {
    btn.classList.remove('bg-blue-600', 'text-white');
    btn.classList.add('bg-slate-100', 'text-slate-600');
  }
  renderSignage();
}

// Toggle Night Mode
function toggleNightMode() {
  state.nightMode = !state.nightMode;
  const html = document.documentElement;
  const btn = document.getElementById('nightModeBtn');
  if (state.nightMode) {
    html.classList.add('dark');
    btn.classList.add('bg-slate-700', 'text-white');
  } else {
    html.classList.remove('dark');
    btn.classList.remove('bg-slate-700', 'text-white');
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
    <button type="button" onclick="selectBedTab(${idx})" class="py-1.5 px-2 rounded-lg font-bold text-xs border transition-all ${idx === state.activeBedIndex ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200 dark:bg-slate-800 dark:text-slate-300'}">
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

// Prevent touch bounce / pull-to-refresh on 10" kiosk tablets
document.addEventListener('touchmove', function(e) {
  if (!e.target.closest('#editorModal')) {
    e.preventDefault();
  }
}, { passive: false });

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderSignage();
  updateClock();
  setInterval(updateClock, 1000);
});
