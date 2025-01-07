

"use strict";

let number=0;
const bbs = document.querySelector('#bbs');
document.querySelector('#post').addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    const date = document.querySelector('#date').value;

    const params = {  // URL Encode
        method: "POST",
        body:  'date='+date+'&name='+name+'&message='+message,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    console.log( params );
    const url = "/post";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        console.log( response );
        document.querySelector('#message').value = "";
    });
});

document.querySelector('#check').addEventListener('click', () => {
    const params = {  // URL Encode
        method: "POST",
        body:  '',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    const url = "/check";
    fetch( url, params )
    .then( (response) => {
        if( !response.ok ) {
            throw new Error('Error');
        }
        return response.json();
    })
    .then( (response) => {
        let value = response.number;
        console.log( value );

        console.log( number );
        if( number != value ) {
            const params = {
                method: "POST",
                body: 'start='+number,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'               
                }
            }
            const url = "/read";
            fetch( url, params )
            .then( (response) => {
                if( !response.ok ) {
                    throw new Error('Error');
                }
                return response.json();
            })
            .then( (response) => {
                number += response.messages.length;
                for( let mes of response.messages ) {
                    console.log( mes );  // 表示する投稿
                    let cover = document.createElement('div');
                    cover.className = 'cover';
                    cover.setAttribute('data-id', mes.id);
                    //日付機能の追加
                    let date_area = document.createElement('span');
                    date_area.className = 'date';
                    date_area.innerText = mes.date;
                    //名前
                    let name_area = document.createElement('span');
                    name_area.className = 'name';
                    name_area.innerText = mes.name;
                    //メッセージ
                    let mes_area = document.createElement('span');
                    mes_area.className = 'mes';
                    mes_area.innerText = mes.message;
                    //削除機能の追加
                    let delete_btn = document.createElement('button')
                    delete_btn.innerText = '削除'
                    delete_btn.addEventListener('click', () => deletes(mes.id));
                    //編集機能の追加
                    let edit_btn = document.createElement('button');
                    edit_btn.innerText = '編集';
                    edit_btn.addEventListener('click', () => edit(mes.id));
                    cover.appendChild( date_area );
                    cover.appendChild( name_area );
                    cover.appendChild( mes_area );
                    cover.appendChild(delete_btn);  
                    cover.appendChild(edit_btn);  
                    bbs.appendChild( cover );
                }
            })
            
        }
    });
});

function deletes(id) {
    const url = `/bbs/${id}`;
    const params = {
        method: "DELETE",
    };
    fetch(url, params)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    })
    .then(() => {
        alert("投稿を削除しました");
        document.querySelector(`.cover[data-id='${id}']`).remove();
        
    })
}

function edit(id) {
    // 対象投稿を取得
    const post = document.querySelector(`.cover[data-id='${id}']`);
    
    // ユーザー入力を促す
    const name = prompt("名前を入力してください", post.querySelector('.name').innerText);
    const message = prompt("メッセージを入力してください", post.querySelector('.mes').innerText);

    // 入力がキャンセルされた場合
    if (!name || !message) {
        alert("変更されませんでした");
        return;
    }

    // サーバーに PUT リクエストを送信
    const url = `/bbs/${id}`;
    const params = {
        method: "PUT",
        body: 'date='+date+'&name='+name+'&message='+message,
        headers: { 
            "Content-Type": "application/x-www-form-urlencoded" 
        }
        
    };

    fetch(url, params)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error");
            }
            return response.json();
        })
        .then(data => {
            // サーバーからのレスポンスを基に画面を更新
            alert("投稿を更新しました");
            post.querySelector('.name').innerText = data.post.name;
            post.querySelector('.mes').innerText = data.post.message;
        })
}