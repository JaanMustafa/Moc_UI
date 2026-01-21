# 📋 TODO Dashboard Application

A modern, responsive TODO application built with React, TypeScript, and Tailwind CSS that consumes the DummyJSON API.

## ✨ Features

- **📱 Responsive Grid Layout** - Adapts from 1 to 4 columns based on screen size
- **🔍 Search Functionality** - Filter todos by text content
- **🏷️ Status Filtering** - View all, completed, or pending todos
- **📊 Real-time Counts** - See todo counts for each status
- **🎨 Modern UI** - Clean design with smooth animations and transitions
- **♿ Accessible** - Keyboard navigation and ARIA labels
- **⚡ Fast** - Built with Vite for lightning-fast development and builds
- **🔄 Smart Caching** - React Query for efficient data fetching

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **React Query (TanStack Query)** - Data fetching and caching
- **Axios** - HTTP client
- **DummyJSON API** - Backend data source

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

The app will be available at: **http://localhost:5173**

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── ErrorBoundary.tsx    # Global error boundary
│   ├── todo/
│   │   ├── TodoCard.tsx          # Individual todo card
│   │   ├── TodoGrid.tsx          # Grid layout for todos
│   │   ├── TabFilter.tsx         # Status filter tabs
│   │   └── TodoSkeleton.tsx      # Loading skeletons
│   └── ui/
│       └── Badge.tsx             # Status badge component
├── pages/
│   ├── TodoListPage.tsx          # Main list view (/domain)
│   └── TodoDetailPage.tsx        # Detail view (/domain/:id)
├── hooks/
│   └── useTodos.ts               # React Query hooks
├── services/
│   ├── api.ts                    # Axios configuration
│   └── todoService.ts            # API methods
├── types/
│   └── todo.ts                   # TypeScript interfaces
├── App.tsx                       # Root component with routing
├── main.tsx                      # Entry point
└── index.css                     # Global styles
```

## 🎯 Main Routes

- `/` - Redirects to `/domain`
- `/domain` - Todo list with filters and search
- `/domain/:todoId` - Individual todo details page

## 🔌 API Integration

The app uses the [DummyJSON Todos API](https://dummyjson.com/docs/todos):

- **Base URL**: `https://dummyjson.com`
- **Get all todos**: `GET /todos` (150 total)
- **Get single todo**: `GET /todos/:id`
- **Get by user**: `GET /todos/user/:userId`

## 🎨 Design Features

### Color Palette

- **Primary**: Blue hues for interactive elements
- **Success**: Green for completed todos
- **Warning**: Yellow/orange for pending todos
- **Neutral**: Gray scale for text and backgrounds

### Animations

- Card hover effects (lift and shadow)
- Fade-in transitions for content
- Shimmer loading skeletons
- Smooth tab transitions

### Responsive Breakpoints

- **Mobile** (< 768px): 1 column
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (1024px - 1280px): 3 columns
- **Large** (> 1280px): 4 columns

## 🧪 Testing the Application

1. **List View**:
   - Verify todos load in a grid
   - Test tab filtering (All/Completed/Pending)
   - Try searching for todos
   - Check responsive layout on different screen sizes

2. **Detail View**:
   - Click on a todo card
   - Verify all details are displayed
   - Test back navigation
   - Check breadcrumb navigation

3. **Loading States**:
   - Refresh to see shimmer loading
   - Check empty state messages

4. **Error Handling**:
   - Try invalid todo ID in URL
   - Check network error handling

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌟 Key Features Explained

### Search Functionality
Real-time client-side search filters todos as you type. Searches through the todo description text.

### Tab Filtering
Three tabs to filter todos:
- **All Todos**: Shows all 150 todos
- **Completed**: Shows only completed todos
- **Pending**: Shows only incomplete todos

Each tab displays the count of todos in that category.

### React Query Caching
- Todos are cached for 5 minutes after fetching
- Automatic background refetching when data becomes stale
- Optimistic updates for better UX (if implementing CRUD)

### Error Boundaries
Catches and displays React errors gracefully without crashing the entire app.

## 🔧 Configuration

### Tailwind CSS v4
The project uses Tailwind CSS v4 with the new `@import "tailwindcss"` syntax. Custom colors are defined as CSS custom properties in `src/index.css`.

### TypeScript
Strict mode enabled for maximum type safety. All components and utilities are fully typed.

## 🚧 Future Enhancements

- [ ] Add/Edit/Delete functionality (with optimistic updates)
- [ ] Infinite scroll or pagination
- [ ] Dark mode toggle
- [ ] User profile integration
- [ ] Local storage persistence
- [ ] Advanced filtering options
- [ ] Sort by various criteria
- [ ] Export todos to CSV/JSON

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **DummyJSON** for providing the free API
- **Tailwind CSS** for the amazing utility framework
- **React Query** for simplified data fetching
- **Vite** for the incredible dev experience

---

**Built with ❤️ using modern web technologies**
