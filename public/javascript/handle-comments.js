const btn = document.querySelector('#comment-submit');

async function handleCommentForm(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#comment-field').value.trim();

    const post_id = window.location.toString().split('/')
    [
        window.location.toString().split('/').length - 1
    ].split('?')[0];

    if (comment_text) {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
            comment_text,
            post_id
            
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
}

async function deleteComment(event){
    event.preventDefault();
    const comment_id = document.querySelector('.edit-comment').getAttribute('data-comment-id');
    console.log(comment_id);

    if(comment_id){
    const response = await fetch('api/comments', {
        method: 'DELETE',
        body: JSON.stringify({
            comment_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        document.location.reload();
    } else {
        alert(response.statusText);
    }

    //need to grab comment id and change comment text to textarea
    //once there, text to show up in textarea
    //user can edit what they wanted to write, and click confirm to update the text


}
}



btn.addEventListener('click', handleCommentForm);
document.querySelector('.delete-comment').addEventListener('click', deleteComment);
