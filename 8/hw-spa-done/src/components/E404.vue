<template>
  <div>
    <h1>Page not found</h1>
    <hr>
    <!-- можно написать :to = "{name: 'products'}"-->
    <!--похожа на ссылку a to вместо href-->
    <router-link to ="/products">Start from main page</router-link>
    <hr>
    <p class="some">Some Text</p>
    <p class="other">Other text</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>/*1.) Для корректной работы со стилями во Vue лучше применять атрибут
scoped, которое соотнсит слекторы в style с атрибутами в template и автоматически
преобразует в data атрибуты, расчитанные по хешу для замыкания стилей внутри
данного компонента. Если атрибут scoped не указать то стили будут работать
глобально и возможно будут конфилктовать с другими стилями с такими же именами */

/*2.1) Вместо scoped можно прописать module и после этого во Vue появляется глобальная
переменная $styles.
  2.2) Можно написать именнованный атрибут module = 'colors', после этого colors
  можно использовать в этом компонетне и обращаться затем сможем:
  :class = 'colors.some' или :class = 'colors.other'*/
    .some {
      color: red;
    }
    .other {
      color: green;
    }
</style>

<!--
Стили, как и скрипты с темплайтами можно подключать отдельными файлами
вот таким способом
<style src ='.css/someStyle.css'></style>
-->


