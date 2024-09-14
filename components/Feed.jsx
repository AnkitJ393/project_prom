"use client";
import {useState,useEffect} from 'react';
import  PromptCard from './PromptCard';
    

  const PromptCardList=({data,handleTagClick})=>{
    return (
      <div className='mt-16 prompt_layout'>
          {data.map((post)=>{
            return (<PromptCard
              key={post.id}
              post={post}
              handleTagClick={handleTagClick}
             />)
          })}
      </div>
    )
  }

    const Feed = () => {
      const [searchText, setSearchText] = useState('');
      const [posts,setPosts]=useState([]);
      const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);


      // const filteredPrompts=(searchValue)=>{
      //   const regex = new RegExp(searchtext, "i"); 
      //   return posts.filter((post)=>{
      //     regex.test(post.creator.username)||
      //     regex.test(post.tag)||
      //     regex.test(post.prompt)
      //   });
      // }

      const filteredPrompts = (searchtext) => {
        const lowercasedSearch = searchtext.toLowerCase(); // Convert searchtext to lowercase
        return posts.filter(
          (item) =>
            item.creator.username.toLowerCase().includes(lowercasedSearch) || // Search in username
            item.tag.toLowerCase().includes(lowercasedSearch) ||              // Search in tag
            item.prompt.toLowerCase().includes(lowercasedSearch)              // Search in prompt
        );
      };
      

      const handleSearchChange=(e)=>{
        clearTimeout(searchTimeout);

        setSearchText(e.target.value);

        setSearchTimeout(
          setTimeout(()=>{
            const searchResults=filteredPrompts(e.target.value);
            setSearchedResults(searchResults);
          },500)
        )
      }

      const handleTagClick=(tagName)=>{
        setSearchText(tagName);

        const searchResults=filteredPrompts(tagName)
        setSearchedResults(searchResults);
      }

     const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      
      setPosts(data);
    };

    useEffect(() => {
      fetchPosts();
    }, []);

      return (
        <section className='feed'>
          <form className='relative w-full flex-center'>
            <input type="text"
              placeholder='Search for a tag or username'
              value={searchText}
              onChange={handleSearchChange}
              required
              className='search_input peer'
            />
          </form>

        {searchText ?
          <PromptCardList
            data={searchedResults}
            handleTagClick={handleTagClick}          
          /> :
          <PromptCardList
            data={posts}
            handleTagClick={handleTagClick}          
          /> 
          }
        </section>
      )
    }
    
    export default Feed;