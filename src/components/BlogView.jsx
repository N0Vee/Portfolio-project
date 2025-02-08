import React from 'react'

function BlogView() {



    useEffect(() => {
        axios.get(`${BASE_URL}/${id}`)
            .then((res) => setBlog(res.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    
  return (
    <div>BlogView</div>
  )
}

export default BlogView