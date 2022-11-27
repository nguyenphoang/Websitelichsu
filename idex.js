function myFunction() {
    Swal.fire({
        icon: 'info',
        title: 'Chào mừng bạn đến với website của chúng tôi, bạn có muốn nhận được giảm giá 75% cho Learnmorw pro không',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Có',
        background: '#fff url(https://d33wubrfki0l68.cloudfront.net/9d028cfb41e2be13fe04f09feaf57f3ff413dcf9/694ee/img/pawel-czerwinski-8uzpyniu-rq-unsplash.jpg)',
        denyButtonText: `Không`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Chúc mừng, bạn đã nhận được 1 phiếu giảm giá 75%, có hạn trong ngày hôm nay', '', 'success',)
          }else if (result.isDenied) {
          Swal.fire({
            icon:   'question',
            title: 'Bạn chắc chứ',
            showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Tôi chắc',
        denyButtonText: `Không, tôi muốn nhận phiếu giảm giá`,
          })
          if (result.isConfirmed) {
            Swal.fire('Chúc mừng, bạn đã nhận được 1 phiếu giảm giá 75%, có hạn trong ngày hôm nay', '', 'success')
          }
        }
      })
}
function fu() {
    Swal.fire({
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        title: 'Admin github: nguyenphoang',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(https://d33wubrfki0l68.cloudfront.net/9d028cfb41e2be13fe04f09feaf57f3ff413dcf9/694ee/img/pawel-czerwinski-8uzpyniu-rq-unsplash.jpg)',
      })
}
function fu2() {
    Swal.fire({
        icon: 'info',
        title: 'Website đang cải thiện, hãy donate để web có nhiều thông tin mới',
        text: 'Hình thức donate: tại lớp.Nếu các bạn không donate được,hãy click link bên dưới',
        footer: '<a href="http://news.rr.nihalnavath.com/posts/Donate-here-01473d46">Nếu không donate, hãy click vào đây để hỗ trợ</a>',
        background: '#fff url(https://d33wubrfki0l68.cloudfront.net/9d028cfb41e2be13fe04f09feaf57f3ff413dcf9/694ee/img/pawel-czerwinski-8uzpyniu-rq-unsplash.jpg)'
      })
}
