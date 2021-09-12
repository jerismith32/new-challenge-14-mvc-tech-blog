async function newFormHandler(event) {
    event.preventDefault();
  
    const blog_title = document.querySelector('input[name="blog_title"]').value;
    const blog_body = document.querySelector('input[name="blog_body"]').value;
  
    const response = await fetch(`/api/blogposts`, {
      method: 'POST',
      body: JSON.stringify({
        blog_title,
        blog_body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
  