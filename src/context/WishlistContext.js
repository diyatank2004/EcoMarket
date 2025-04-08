import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchWishlist = async () => {
    try {
      const res = await axios.get('/api/wishlist/get', {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      setWishlistItems(res.data);
    } catch (err) {
      console.error('Failed to fetch wishlist:', err);
    }
  };

  const addToWishlist = async (product) => {
    try {
      const res = await axios.post('/api/wishlist/add', product, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      setWishlistItems([...wishlistItems, res.data]);
    } catch (err) {
      console.error('Failed to add to wishlist:', err);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      await axios.delete(`/api/wishlist/remove/${id}`, {
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      setWishlistItems(wishlistItems.filter(item => item._id !== id));
    } catch (err) {
      console.error('Failed to remove from wishlist:', err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
