عالی میلاد، قدم بعدی ساخت فایل **JavaScript** است. 🚀

الان در همان Repository:

1. روی **Add file** بزن.
2. گزینه **Create new file** را انتخاب کن.
3. نام فایل را دقیقاً وارد کن:

```text
js/script.js
```

4. کدی که پایین می‌فرستم را داخلش Paste کن.
5. پایین صفحه Commit کن.

این نسخه فعلاً کارهای پایه را انجام می‌دهد:

* اسکرول نرم بین بخش‌های سایت
* پیام هنگام کلیک روی دکمه‌ها
* آماده‌سازی برای امکانات بعدی مثل فرم سفارش و منوی موبایل

کد فایل سوم:

```javascript
// اسکرول نرم برای لینک‌های منو

document.querySelectorAll('.menu a').forEach(link => {

    link.addEventListener('click', function(e) {

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});




// پیام همکاری

const buttons = document.querySelectorAll('button');


buttons.forEach(button => {

    button.addEventListener('click', function(){

        alert(
            "برای سفارش عمده و همکاری با واحد فروش کیمیا گستر پیشگام والا تماس بگیرید."
        );

    });

});




// پیام آماده بودن سایت

console.log(
    "Kimia Gostar Pishgam Vala website loaded successfully."
);
```

بعد از Commit، سه فایل اصلی سایت را داریم:

✅ `index.html`
✅ `css/style.css`
✅ `js/script.js`

بعد از این مرحله می‌رویم سراغ مرحله بعدی:
**فعال کردن GitHub Pages تا سایتت یک لینک اینترنتی واقعی بگیرد** 🌐

وقتی JavaScript را اضافه کردی بگو: **JS اضافه شد**.
