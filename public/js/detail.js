const berita1 = ` <div class="news">
<h2>Berita 1</h2>
<p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem voluptate placeat cupiditate non earum doloremque alias illum quibusdam pariatur, soluta commodi, a dignissimos error, deleniti consequatur consequuntur veritatis assumenda doloribus explicabo similique aliquam beatae! Tenetur rerum, sit dignissimos minus itaque voluptatum quam eveniet dicta porro deleniti consequuntur recusandae quisquam nostrum sapiente! Voluptatem nesciunt aut cupiditate nobis vel et excepturi. Animi, quaerat? Nobis rerum impedit nam molestiae iusto animi expedita doloribus tenetur amet inventore quae consectetur, quo aliquam, earum nostrum, mollitia dolores est illum modi placeat! Error nam excepturi suscipit dolore, dolor consequuntur, unde magnam dolorum soluta fugit facilis eos!
</p>
<img src="https://img.gazeta.ru/files3/35/17795035/38-pic_32ratio_900x600-900x600-88795.jpg" alt="">
</div>`;

const berita2 = ` <div class="news">
<h2>Berita 2</h2>
<p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem voluptate placeat cupiditate non earum doloremque alias illum quibusdam pariatur, soluta commodi, a dignissimos error, deleniti consequatur consequuntur veritatis assumenda doloribus explicabo similique aliquam beatae! Tenetur rerum, sit dignissimos minus itaque voluptatum quam eveniet dicta porro deleniti consequuntur recusandae quisquam nostrum sapiente! Voluptatem nesciunt aut cupiditate nobis vel et excepturi. Animi, quaerat? Nobis rerum impedit nam molestiae iusto animi expedita doloribus tenetur amet inventore quae consectetur, quo aliquam, earum nostrum, mollitia dolores est illum modi placeat! Error nam excepturi suscipit dolore, dolor consequuntur, unde magnam dolorum soluta fugit facilis eos!
</p>
<img src="https://img.gazeta.ru/files3/35/17795035/38-pic_32ratio_900x600-900x600-88795.jpg" alt="">
</div>`;

const berita3 = ` <div class="news">
<h2>Berita 3</h2>
<p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem voluptate placeat cupiditate non earum doloremque alias illum quibusdam pariatur, soluta commodi, a dignissimos error, deleniti consequatur consequuntur veritatis assumenda doloribus explicabo similique aliquam beatae! Tenetur rerum, sit dignissimos minus itaque voluptatum quam eveniet dicta porro deleniti consequuntur recusandae quisquam nostrum sapiente! Voluptatem nesciunt aut cupiditate nobis vel et excepturi. Animi, quaerat? Nobis rerum impedit nam molestiae iusto animi expedita doloribus tenetur amet inventore quae consectetur, quo aliquam, earum nostrum, mollitia dolores est illum modi placeat! Error nam excepturi suscipit dolore, dolor consequuntur, unde magnam dolorum soluta fugit facilis eos!
</p>
<img src="https://c.biztoc.com/p/2918ba17c5d9398b/s.webp" alt="">
</div>`;

const berita4 = ` <div class="news">
<h2>Berita 4</h2>
<p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem voluptate placeat cupiditate non earum doloremque alias illum quibusdam pariatur, soluta commodi, a dignissimos error, deleniti consequatur consequuntur veritatis assumenda doloribus explicabo similique aliquam beatae! Tenetur rerum, sit dignissimos minus itaque voluptatum quam eveniet dicta porro deleniti consequuntur recusandae quisquam nostrum sapiente! Voluptatem nesciunt aut cupiditate nobis vel et excepturi. Animi, quaerat? Nobis rerum impedit nam molestiae iusto animi expedita doloribus tenetur amet inventore quae consectetur, quo aliquam, earum nostrum, mollitia dolores est illum modi placeat! Error nam excepturi suscipit dolore, dolor consequuntur, unde magnam dolorum soluta fugit facilis eos!
</p>
<img src="https://c.biztoc.com/p/170a34783f00a93b/s.webp" alt="">
</div>`;

const news = [berita1, berita2, berita3, berita4];

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded");
  // Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const newsId = urlParams.get("id");
  console.log(newsId);

  // Get selected news
  const berita = news[newsId - 1];

  const content = document.getElementById("news");
  content.innerHTML = berita;
});
