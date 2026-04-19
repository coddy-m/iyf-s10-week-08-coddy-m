# iyf-s10-week-08-coddy-m
 CommunityHub - Week 8 React Project

👤 **Name:** [Michelle Wanja]  
🔗 **GitHub:** [coddy-m]  
📅 **Week:** 8 - React Fundamentals

## Project Description
- This project demonstrates core React fundamentals including component architecture, state management, event handling, props drilling, and immutable data patterns.


## 🚀 Features

- ✅ React project setup with Vite
- ✅ Component-based architecture
- ✅ Props & state management with useState
- ✅ Event handling (onClick, onChange, onSubmit)
- ✅ List rendering with keys
- ✅ Component composition with children prop
- ✅ Lifting state up for shared data
- ✅ Bonus: Like/unlike posts, delete posts, search filter

## Lessons Learned
- Understand JSX syntax and expressions
- Create functional components
- Pass data with props
- Render dynamic lists with map() and key
- Use children prop for composition
- Manage local state with useState
- Handle user events
- Update arrays/objects in state immutably
- Lift state to share between components

## Challenges Faced
- Challenge :Like/unlike logic crashing
- Solution : Simplified to boolean isLiked: false per post & added safe defaults in state initialization
- Challenge :Stale state in setPosts()
- Solution : Switched to functional updates: setPosts(prev => prev.map(...))


## How to run
``` bash
- git clone https://github.com/coddy-m/iyf-s10-week-08-coddy-m.git
- cd iyf-s10-week-08-yourusername
- npm install
- npm run dev

