
$.ajax({
    url: '/api/list',
    success(res) {
        let templates = `
            <ul>
                {{each data}}
                    <li>{{$value}}</li>
                {{/each}}
            </ul>
        `
        let html = "<ul>";
        $.each(res.data, (index, value) => {
            html += `<li>${value}</li>`
        })
        html += "</ul>";
        let str = template.render(templates, {
            data: res.data
        });

        $('#list').html(str)
    }
})