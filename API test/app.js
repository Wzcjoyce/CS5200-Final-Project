var btn = document.getElementById('btn')
btn.onclick = function() {
    console.log(11)
    // $.ajax({
    //     type: "POST",
    //     url: "http://127.0.0.1:8000/api/customer/add/",
    //     data: {
    //         firstName: 'django',
    //         lastName: 'Djangot',
    //         Company: 'Python',
    //         Email: 'qq@qq.com',
    //         Description: 'Desc_test_',
    //         ideaPrice: 100000,
    //         manager_id: 2
    //     },
    //     datatype: 'json',
    //     success: function(e) {
    //         console.log(e)
    //     },
    //     error: function(e)
    //     {
    //         console.log('失败',e)
    //     }
    // })
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:8000/api/manager/modify/",
        data: {
            managerId: 2,
            firstName: 'Django_mod_Manager',
            lastName: 'last',
            Email: 'test@gmail.com',
            Gender: 'Female'
        },
        datatype: 'json',
        success: function(e) {
            console.log(e)
        },
        error: function(e)
        {
            console.log('失败',e)
        }
    })
}