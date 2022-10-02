# Week - 3

### JavaScript Fonksiyonları

---

**map** → array içerisine veri eklemek için kullanılır

![Screen Shot 2022-09-17 at 10.21.13.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-17_at_10.21.13.png)

filter → array içerisindeki verileri filtrelemek için kullanılır, grup döner, yazdıktan sonra if ile boş olup olmadığı kontrol edilmelidir

![Screen Shot 2022-09-17 at 10.21.27.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-17_at_10.21.27.png)

find → array içerisindeki tek bir veri döner, yine if ile kontrol sağlamak gerekebilir, çünkü eğer herhangi bir veri bulamazsa undefined döner

![Screen Shot 2022-09-17 at 10.23.54.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-17_at_10.23.54.png)

reduce → integer belirtilirse sayıyı bir arttırarak, string belirtilirse sürekli o string değerini üzerine ekleyerek, array belirtilirse sürekli array’e ekleme yaparak ilerler

![Screen Shot 2022-09-17 at 10.30.57.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-17_at_10.30.57.png)

foreach → array içerisindeki verileri tek tek döner, diğer fonksiyonları kullanamadığım durumda kullanabilirim

![Screen Shot 2022-09-17 at 10.35.11.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-17_at_10.35.11.png)

@ kısayolunun dosya yolunu bulabilmesi için vite.config.js içerisine eklenmesi gereken kod

[The production environment uses new URL(src, import.meta.url) to report an error · Issue #5558 · vitejs/vite](https://github.com/vitejs/vite/issues/5558#issuecomment-961720914)

```jsx
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // publicDir: "/",
  resolve: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
```

- Eğer sadece bulunduğumuz componentteki elementlere css stili vermek istiyorsak, <style scope> şeklinde yazmamız gerekiyor. Scope anahtar kelimesini yazmazsak globale hitap eder.

CSS Methodologys - (BEM)

Props Gönderme Yöntemleri 

- köşeli parantez ve süslü parantez şeklinde gönderebiliriz
- süslü parantezle kullanırsak virgüllerle ayırıp daha fazla özellik yazabiliriz

![Screen Shot 2022-09-18 at 09.25.44.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-18_at_09.25.44.png)

emitsler alt komponentten üst komponente veri göndermeye yarar, props gibi çalışır 

### ref()

- dinamik olarak değiştirmek istediğimiz verilerde ref kullanmamız gerekir
- ref kullanılan değişken value alır
- ref eklerken mutlaka import etmemiz gerekiyor
- ref’lerde let ile tanımlama yapmamız zorunlu değildir, const ile de tanımlama yapabiliriz, çünkü ref() kullandığımızda bize bir obje döner ve biz aslında “degisken.value”yu değiştiririz.

![Screen Shot 2022-09-18 at 10.14.32.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-18_at_10.14.32.png)

### v-if ve v-show Farkı

**v-if** → elementi direkt DOM’dan kaldırır

**v-show** → elemente display:none özelliği kazandırır

Best Practise olarak script - template - style şeklinde olmalı!

## Ders İçi Egzersizin Çözümü

![Screen Shot 2022-09-18 at 13.16.10.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-18_at_13.16.10.png)

![Screen Shot 2022-09-18 at 13.16.41.png](Week%20-%203%20612b2ace60414103a475b517a6f44baa/Screen_Shot_2022-09-18_at_13.16.41.png)

[Dog-Ceo Finder](https://dog-ceo.vercel.app/)

[Protein-Vue.js-Bootcamp/3-Week/dog-ceo-app at master · ynsmrtpc/Protein-Vue.js-Bootcamp](https://github.com/ynsmrtpc/Protein-Vue.js-Bootcamp/tree/master/3-Week/dog-ceo-app)

# ÖDEV

- Geçen hafta yaptığımız ödevin aynısını Vue ile component kullanarak yap.
- Componente gönderilen öğrencilerden asistanların background’ı farklı renk olsun.

## URL’S

[30-Days-Of-JavaScript/10_day_Sets_and_Maps.md at master · Asabeneh/30-Days-Of-JavaScript](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/10_Day_Sets_and_Maps/10_day_Sets_and_Maps.md#exerciseslevel-1)

[Group Array of JavaScript Objects by Key or Property Value](https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752)

[https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

[The production environment uses new URL(src, import.meta.url) to report an error · Issue #5558 · vitejs/vite](https://github.com/vitejs/vite/issues/5558#issuecomment-961720914)