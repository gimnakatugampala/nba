// News
export const NewsNBAapi = async () =>{
        const res = await fetch(`https://api.sportsdata.io/v3/nba/scores/json/News?key=eb15a81d002e42e6b4ef18a173c0f441`)
    
        return res.json()
    
  }

// News
export const Newsapi = async () =>{
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=582d2cd0a6a54c83b45858d4d3088a1e`)
        
            return res.json()
        
        }