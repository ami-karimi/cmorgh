<template>
  <TopBar>
    <div class=" mt-4 text-right">
      <div >
        <label class="mb-2 block">مرحله 1:</label>
        <select v-model="types" id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">انتخاب نوع تنظیمات</option>
          <option value="l2tp">تنظیمات  L2tp (اندروید زیر 12 و آیفن)</option>
          <option value="openvpn">تنظیمات Openvpn </option>
        </select>
      </div>


      <div v-if="types" class="mt-2">
        <label class="mb-2 block">مرحله 2:</label>
        <select v-model="win"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="">انتخاب سیستم عامل</option>
          <option value="android_sum">اندروید (سامسونگ)</option>
          <option value="android_shi">اندروید (شیاومی)</option>
          <option value="android_hw">اندروید (هواوی)</option>
          <option value="ios">آیفن</option>
          <option value="win_7">ویندوز 7</option>
          <option value="win_up">ویندوز 8 به بالا</option>
        </select>
      </div>

      <div v-if="win && types" class="mt-2 mb-3">
        <label class="mb-2 block">مرحله 3:</label>
        <div v-if="types === 'l2tp' && win === 'android_hw' || win === 'android_sum'">

          <div class="flex p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Pre-sharedkey: </span> vpn@123#
            </div>
          </div>

          <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">مواردی که باعث میشود نتوانید متصل شوید: </span>
              <br>
              <br>
              1. تمام اطلاعات بدون فاصله وارد شود.
              <br>
              2. از صحیح بودن اطلاعات وارد شده اطمینان حاصل کنید.
              <br>
              3. نسبت به کوچک و بزرگ بودن اطلاعات اطمینان حاصل کنید.
              <br>
              4. از داشتن اینترنت مناسب و دارا بودن اینترنت فعال اطمینان حاصل کنید.
              <br>
              5. تمام vpn های رایگان و به غیر از ما را حذف کنید (باعث متصل نشدن میشوند).
              <br>
              6. چنانچه پیغام authorization failed دریافت کردید از وارد نمودن موارد username , password, pre-sharedkey حاصل نمایید .
              <br>
              7. اگر پیغام چند خطی دریافت نمودید از درست نوشتن آدرس سرور و اینترنت خود اطمینان حاصل نمایید.
            </div>
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/1.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/2.jpg">
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/3.jpg">
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/4.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/5.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/6.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/7.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/8.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/9.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sum/10.jpg">
          </div>


        </div>

        <div v-if="types === 'l2tp' && win === 'win_7'">

          <div class="flex p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">secret: </span> vpn@123#
            </div>
          </div>

          <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">مواردی که باعث میشود نتوانید متصل شوید: </span>
              <br>
              <br>
              1. تمام اطلاعات بدون فاصله وارد شود.
              <br>
              2. از صحیح بودن اطلاعات وارد شده اطمینان حاصل کنید.
              <br>
              3. نسبت به کوچک و بزرگ بودن اطلاعات اطمینان حاصل کنید.
              <br>
              4. از داشتن اینترنت مناسب و دارا بودن اینترنت فعال اطمینان حاصل کنید.
              <br>
              5. تمام vpn های رایگان و به غیر از ما را حذف کنید (باعث متصل نشدن میشوند).
              <br>
              6. چنانچه پیغام authorization failed دریافت کردید از وارد نمودن موارد username , password, pre-sharedkey حاصل نمایید .
              <br>
              7. اگر پیغام چند خطی دریافت نمودید از درست نوشتن آدرس سرور و اینترنت خود اطمینان حاصل نمایید.
            </div>
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/1.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/2.jpg">
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/3.jpg">
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/4.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/5.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/6.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/7.jpg">
          </div>
          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/windows/7/8.jpg">
          </div>



        </div>
        <div v-if="types === 'l2tp' && win === 'win_up'">

          <div class="flex p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Pre-sharedkey: </span> vpn@123#
            </div>
          </div>

          <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">مواردی که باعث میشود نتوانید متصل شوید: </span>
              <br>
              <br>
              1. تمام اطلاعات بدون فاصله وارد شود.
              <br>
              2. از صحیح بودن اطلاعات وارد شده اطمینان حاصل کنید.
              <br>
              3. نسبت به کوچک و بزرگ بودن اطلاعات اطمینان حاصل کنید.
              <br>
              4. از داشتن اینترنت مناسب و دارا بودن اینترنت فعال اطمینان حاصل کنید.
              <br>
              5. تمام vpn های رایگان و به غیر از ما را حذف کنید (باعث متصل نشدن میشوند).
              <br>
              6. چنانچه پیغام authorization failed دریافت کردید از وارد نمودن موارد username , password, pre-sharedkey حاصل نمایید .
              <br>
              7. اگر پیغام چند خطی دریافت نمودید از درست نوشتن آدرس سرور و اینترنت خود اطمینان حاصل نمایید.
            </div>
          </div>

          <div class="text-center p-3">
            <p>ابتدا در قسمت جستجو نوار ابزار (taskbar) عبارت add a vpn connection را جستجو کنید. بر روی نتیجه جستجو کلیک کنید.
            </p>

            <img class="mx-auto mt-2 rounded"  src="/windows/10/1.jpg">
          </div>
          <div class="text-center p-3">
            <p>
              بعد از کلیک بر روی گزینه جستجو شده با این صفحه روبرو میشید . خیلی ساده روی گزینه Add a VPN connection کلیک کنید و به مرحله بعد برید.

            </p>
            <img class="mx-auto mt-2 rounded"  src="/windows/10/2.jpg">
          </div>

          <div class="text-center p-3">
            <p>
              پارامتر ها رو مطابق عکس تکمیل کنید و اسکرول را به پایین بکشید.


            </p>

            <img class="mx-auto mt-2 rounded"  src="/windows/10/3.jpg">
          </div>

          <div class="text-center p-3">
            <p>
              نام کاربری و کلمه عبور اکانت را وارد کنید و دکمه save را کلیک کنید.



            </p>
            <img class="mx-auto mt-2 rounded"  src="/windows/10/4.jpg">
          </div>
          <div class="text-center p-3">
            <p>
              تنظیمات تا به اینجا تموم شد ، جهت اتصال به سرویس روی علامت شبکه یا وایفای کلیک کنید و روی amovpn کلیک و دکمه connectرو بزنید.




            </p>
            <img class="mx-auto mt-2 rounded"  src="/windows/10/5.jpg">
          </div>




        </div>


        <div v-if="types === 'l2tp' && win === 'android_shi'">

          <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">مواردی که باعث میشود نتوانید متصل شوید: </span>
              <br>
              <br>
              1. تمام اطلاعات بدون فاصله وارد شود.
              <br>
              2. از صحیح بودن اطلاعات وارد شده اطمینان حاصل کنید.
              <br>
              3. نسبت به کوچک و بزرگ بودن اطلاعات اطمینان حاصل کنید.
              <br>
              4. از داشتن اینترنت مناسب و دارا بودن اینترنت فعال اطمینان حاصل کنید.
              <br>
              5. تمام vpn های رایگان و به غیر از ما را حذف کنید (باعث متصل نشدن میشوند).
              <br>
              6. چنانچه پیغام authorization failed دریافت کردید از وارد نمودن موارد username , password, کلید از پیش مشترک اطمینان حاصل نمایید .
              <br>
              7. اگر پیغام چند خطی دریافت نمودید از درست نوشتن آدرس سرور و اینترنت خود اطمینان حاصل نمایید.
            </div>
          </div>

          <div class="text-center p-3">
            <p>ابتدا وارد  تنظیمات تلفن همراه خود شوید.</p>
            <img class="mx-auto mt-2 rounded"  src="/android/sh/1.jpg">
          </div>
          <div class="text-center p-3">
            <p>سپس بر روی vpn بزنید اگر نبود در صفحه اول بر روی همرسانی بزنید و درون صفحه بر روی vpn بزنید</p>
            <img class="mx-auto mt-2 rounded"  src="/android/sh/2.jpg">
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sh/3.jpg">
          </div>

          <div class="text-center p-3">
            <img class="mx-auto mt-2 rounded"  src="/android/sh/4.jpg">
          </div>







        </div>

        <!-- l2tp And Iphone -->
        <div v-if="types === 'l2tp' && win === 'ios'">

          <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">مواردی که باعث میشود نتوانید متصل شوید: </span>
              <br>
              <br>
               1. تمام اطلاعات بدون فاصله وارد شود.
              <br>
               2. از صحیح بودن اطلاعات وارد شده اطمینان حاصل کنید.
              <br>
              3. نسبت به کوچک و بزرگ بودن اطلاعات اطمینان حاصل کنید.
              <br>
              4. از داشتن اینترنت مناسب و دارا بودن اینترنت فعال اطمینان حاصل کنید.
              <br>
              5. تمام vpn های رایگان و به غیر از ما را حذف کنید (باعث متصل نشدن میشوند).
              <br>
              6. چنانچه پیغام authorization failed دریافت کردید از وارد نمودن موارد account , password, secret اطمینان حاصل نمایید .
             <br>
             7. اگر پیغام چند خطی دریافت نمودید از درست نوشتن آدرس سرور و اینترنت خود اطمینان حاصل نمایید.
            </div>
          </div>

          <div class="text-center p-3">
            <p>ابتدا وارد  تنظیمات تلفن همراه خود شوید.</p>
            <img class="mx-auto mt-2 rounded"  src="/iphone/l2tp/1.jpg">
          </div>
          <div class="text-center p-3">
            <p>سپس به سمت بالا لمس کنید و بر روی گزینه VPN & Device Management بزنید.</p>
            <img class="mx-auto mt-2 rounded"  src="/iphone/l2tp/2.jpg">
          </div>

          <div class="text-center p-3">
            <p>سپس بر روی vpn لمس کنید.</p>
            <img class="mx-auto mt-2 rounded"  src="/iphone/l2tp/3.jpg">
          </div>

          <div class="text-center p-3">
            <p>برو روی گزینه Add Vpn Configuration بزنید.</p>
            <img class="mx-auto mt-2 rounded"  src="/iphone/l2tp/4.jpg">
          </div>
          <div class="text-center p-3">
            <p>طبق نمونه بر اساس اطلاعات دریافتی از پشتیبانی وارد کنید موارد مورد نیاز رو.</p>
            <img class="mx-auto mt-2 rounded"  src="/iphone/l2tp/5.jpg">
          </div>
          <div class="text-center p-3">
            <p>حتما توجه داشته باشید کنار پروفایلی که ایجاد کردید (نامی که در description وارد شده نمایش داده میشود) تیک آبی داشته باشد.</p>
            <img class="mx-auto mt-2 rounded"  src="/iphone/l2tp/6.jpg">
          </div>






        </div>
      </div>
    </div>

  </TopBar>
</template>
<script>
export default {
  data:() => ({
    types: "",
    win: "",
  })
}
</script>