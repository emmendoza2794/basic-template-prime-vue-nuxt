<template>
    <div class="overflow-y-auto">
      <ul class="list-none p-3 m-0">
        <li>
          <div
            v-ripple
            v-styleclass="{
              selector: '@next',
              enterClass: 'hidden',
              enterActiveClass: 'slidedown',
              leaveToClass: 'hidden',
              leaveActiveClass: 'slideup',
            }"
            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
          >
            <span class="font-medium">FAVORITES</span>
            <i class="pi pi-chevron-down"></i>
          </div>
          <ul class="list-none p-0 m-0 overflow-hidden">
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-home mr-2"></i>
                <span class="font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-bookmark mr-2"></i>
                <span class="font-medium">Bookmarks</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                v-styleclass="{
                  selector: '@next',
                  enterClass: 'hidden',
                  enterActiveClass: 'slidedown',
                  leaveToClass: 'hidden',
                  leaveActiveClass: 'slideup',
                }"
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-chart-line mr-2"></i>
                <span class="font-medium">Reports</span>
                <i class="pi pi-chevron-down ml-auto"></i>
              </a>
              <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                <li>
                  <a
                    v-ripple
                    v-styleclass="{
                      selector: '@next',
                      enterClass: 'hidden',
                      enterActiveClass: 'slidedown',
                      leaveToClass: 'hidden',
                      leaveActiveClass: 'slideup',
                    }"
                    class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                  >
                    <i class="pi pi-chart-line mr-2"></i>
                    <span class="font-medium">Revenue</span>
                    <i class="pi pi-chevron-down ml-auto"></i>
                  </a>
                  <ul class="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                    <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-table mr-2"></i>
                        <span class="font-medium">View</span>
                      </a>
                    </li>
                    <li>
                      <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                        <i class="pi pi-search mr-2"></i>
                        <span class="font-medium">Search</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span class="font-medium">Expenses</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-users mr-2"></i>
                <span class="font-medium">Team</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-comments mr-2"></i>
                <span class="font-medium">Messages</span>
                <span class="inline-flex align-items-center justify-content-center ml-auto bg-primary border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-calendar mr-2"></i>
                <span class="font-medium">Calendar</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-cog mr-2"></i>
                <span class="font-medium">Settings</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="list-none p-3 m-0">
        <li>
          <div
            v-ripple
            v-styleclass="{
              selector: '@next',
              enterClass: 'hidden',
              enterActiveClass: 'slidedown',
              leaveToClass: 'hidden',
              leaveActiveClass: 'slideup',
            }"
            class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
          >
            <span class="font-medium">APPLICATION</span>
            <i class="pi pi-chevron-down"></i>
          </div>
          <ul class="list-none p-0 m-0 overflow-hidden">
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-folder mr-2"></i>
                <span class="font-medium">Projects</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-chart-bar mr-2"></i>
                <span class="font-medium">Performance</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                <i class="pi pi-cog mr-2"></i>
                <span class="font-medium">Settings</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mt-auto">
      <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
      <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        <span class="font-bold">Amy Elsner</span>
      </a>
    </div>
</template>
