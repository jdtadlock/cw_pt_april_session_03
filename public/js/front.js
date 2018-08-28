$.get('/api/posts')
  .then(function(posts) {
    posts.forEach(function(post_obj, index) {
      $('#posts').append(`
        <div class="post">
          <h3>${post_obj.title}</h3>
          <p>${post_obj.body}</p>
        </div>
      `);

      // $('#posts').append(
      //   '<div class="post">' +
      //     '<h3>' + post_obj.title + '</h3>' +
      //     '<p>' + post_obj.body + '</p>' +
      //   '</div>'
      // );
    });

    // for ( var i = 0; i < posts.length; i++ ) {
    //   console.log(i);
    // }
  });


// var str = 'This is some string';

// // new String(str);

// console.log(str.indexOf('o'));

// console.log('where am I? -- front');
