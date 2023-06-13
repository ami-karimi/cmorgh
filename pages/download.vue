<template>
  <TopBar>



    <div class="mx-2 mt-2 text-right">

      <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">توضیحات</span>
        <div>
          <span class="font-medium">نکات قبل از دانلود:</span>
          <ul class="mt-1.5 ml-4 list-disc list-inside">
            <li>شیوه های اتصال ما L2tp/Openvpn میباشد </li>
            <li>در این بخش شما نرم افزار openvpn را میتوانید دانلود کنید اگر نیاز دارید در غیر اینصورت میتوانید وارد بخش آموزشات شوید و با تنظیمات l2tp اتصال خود را برقرار کنید.</li>
            <li>شیوه اتصال با openvpn مطمعن تر و پایدار تر میباشد در هر صورت.</li>
          </ul>
        </div>
      </div>


      <label for="countries" class="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white">دانلود نرم افزار جهت اتصال به سرور</label>
      <select id="countries" v-model="type" class="bg-gray-50 mb-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="">لطفا سیستم عامل خود را انتخاب نمایید</option>
        <option value="android">اندروید</option>
        <option value="ios">آیفن (ios)</option>
        <option value="mac">مک بوک (ios)</option>
        <option value="windows">ویندوز</option>
      </select>


      <div class="download-box mt-3 ">

        <div v-if="type === 'android'">

          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="mb-2 text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <img class="w-32 h-15 p-1 mx-auto rounded-full  ring-gray-300 dark:ring-gray-500" src="/img/wg.png" alt="Bordered avatar">
              <div>
                وایرگارد (WireGuard)
                <br>

              </div>
            </div>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="https://arta20.xyz/download/wg.apk" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم  </div>
                </div>
              </a>

              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.wireguard.android&hl=en_US" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="ml-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود در </div>
                  <div class="-mt-1  text-sm font-semibold">گوگل پلی</div>
                </div>
              </a>
            </div>
          </div>


          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="mb-2 text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <img class="w-32 h-15 p-1 mx-auto rounded-full  ring-gray-300 dark:ring-gray-500" src="/img/openvpn.png" alt="Bordered avatar">
              <div>
                اٌپن وی پی ان (OpenVpn)
                <br>
                <small class="text-gray-500 text-xs text-left">مناسب برای اندروید بالاتر تر از 12</small>

              </div>
            </div>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="https://arta20.xyz/download/op_arembi.apk" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم برای ARMEABI</div>
                </div>
              </a>
              <a href="https://arta20.xyz/download/op_arm64.apk" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم برای ARM64 </div>
                </div>
              </a>
              <a href="https://arta20.xyz/download/op_x86.apk" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم برای X86 </div>
                </div>
              </a>

              <a target="_blank" href="https://play.google.com/store/apps/details?id=net.openvpn.openvpn&hl=en" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="ml-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود در </div>
                  <div class="-mt-1  text-sm font-semibold">گوگل پلی</div>
                </div>
              </a>
            </div>
          </div>

          <div class="w-full p-4 mt-3 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="mb-2 text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <img class="w-32 h-15 p-1 mx-auto rounded-full  ring-gray-300 dark:ring-gray-500" src="/img/client.png" alt="Bordered avatar">
              <div>
                وی پی ان کلاینت (VPN Client Pro)
                <small class="text-gray-500 text-xs text-left">مناسب برای اندروید پایین تر از 12</small>

              </div>
            </div>

            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم</div>
                </div>
              </a>
              <a target="_blank"  href="https://play.google.com/store/apps/details?id=it.colucciweb.vpnclientpro&hl=de&pli=1" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="ml-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود در </div>
                  <div class="-mt-1  text-sm font-semibold">گوگل پلی</div>
                </div>
              </a>
            </div>
          </div>


        </div>
        <div v-if="type === 'ios' || type === 'mac'">
          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="mb-2 text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <img class="w-32 h-15 p-1 mx-auto rounded-full  ring-gray-300 dark:ring-gray-500" src="/img/openvpn.png" alt="Bordered avatar">
              <div>
                اٌپن وی پی ان (OpenVpn)
                <br>
              </div>
            </div>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="https://apps.apple.com/us/app/openvpn-connect-openvpn-app/id590379981" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg class="ml-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود یا</div>
                  <div class="-mt-1  text-sm font-semibold">اپ استور (App Store)</div>
                </div>
              </a>
            </div>
          </div>



        </div>
        <div v-if="type === 'windows'">
          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="mb-2 text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <img class="w-32 h-15 p-1 mx-auto rounded-full  ring-gray-300 dark:ring-gray-500" src="/img/wg.png" alt="Bordered avatar">
              <div>
                وایرگارد (WireGuard)
              </div>
            </div>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="https://arta20.xyz/download/wg-windows.exe" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم</div>
                </div>
              </a>
            </div>
          </div>


          <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="mb-2 text-2xl font-bold text-gray-900 dark:text-white flex items-center">
              <img class="w-32 h-15 p-1 mx-auto rounded-full  ring-gray-300 dark:ring-gray-500" src="/img/openvpn.png" alt="Bordered avatar">
              <div>
                اٌپن وی پی ان (OpenVpn)
              </div>
            </div>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="https://arta20.xyz/download/win_op.msi" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم</div>
                </div>
              </a>
              <a href="https://arta20.xyz/download/op_win_x86.msi" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
                <div class="text-right">
                  <div class="mb-1 text-xs">دانلود با</div>
                  <div class="-mt-1  text-sm font-semibold">لینک مستقیم برای ویندوز 32 (x86)</div>
                </div>
              </a>
            </div>
          </div>



        </div>

      </div>



      <div class="max-w-sm mt-3 mb-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"  viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>

        <a href="#">
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">دانلود پروفایل های openvpn</h5>
        </a>
        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">دانلود پروفایل ها ضروری میباشد پس از نصب برنامه بایستی به برنامه openvpn اضافه کنید</p>


        <a href="https://arta20.xyz/download/openvpn.zip?t=2" class="w-full mb-2 sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ml-3 w-7 h-7 bi-cloud-arrow-down-fill" viewBox="0 0 16 16"> <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/> </svg>
          <div class="text-right">
            <div class="mb-1 text-xs">دانلود با</div>
            <div class="-mt-1  text-sm font-semibold">لینک مستقیم پروفایل ها</div>
          </div>
        </a>


        <nuxt-link  to="/learning" class="inline-flex mt-2 items-center text-blue-600 hover:underline">
          <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
          مشاهده آموزش اضافه کردن به برنامه
        </nuxt-link>

      </div>



    </div>

  </TopBar>
</template>
<script>
export  default {
  data: () => ({
    type: '',
  }),
  methods :{

  }
}
</script>