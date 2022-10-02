# Week - 1

### query selector kullanırken attribute kullanmaya özen göster!

```xml
<div class="red" id="app" data-bootcamp><div/>

// script

document.querySelector("[data-bootcamp]") 
```

her component kendi özel klasöründe olmalı globalse eğer components içerisinde olabilir!!