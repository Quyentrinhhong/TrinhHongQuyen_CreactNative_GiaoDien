import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
  Animated,
  Modal,
  Pressable,
  Alert
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'; // Import icon
import { styles } from "./styles";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [screen, setScreen] = useState("login");
  const [animation] = useState(new Animated.Value(1));
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); // Add for product details
  const [isCartVisible, setIsCartVisible] = useState(false); // State for cart visibility

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Vui lòng điền đầy đủ thông tin đăng nhập.");
      return;
    }
    if (email === "trinhhongquyen@gmail.com" && password === "123456") {
      setScreen("products");
    } else {
      Alert.alert("Thông tin đăng nhập không đúng");
    }
  };

 

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Vui lòng điền đầy đủ thông tin đăng ký.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }
    console.log(`Email: ${email}, Password: ${password}`);
    setScreen("login");
  };

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert("Vui lòng nhập email để đặt lại mật khẩu.");
      return;
    }
    console.log(`Yêu cầu đặt lại mật khẩu cho: ${email}`);
  };

  const products = [
    { 
      id: "1", 
      name: "Bánh kem nho", 
      price: 200000, 
      image: require("./../../assets/images/nhocake.jpg"), 
      description: "Bánh kem nho thơm ngon, hấp dẫn với lớp kem béo ngậy, phủ đầy nho tươi mát. Đây là sự lựa chọn hoàn hảo cho các buổi tiệc sinh nhật hay những dịp đặc biệt. Bánh có độ ngọt vừa phải, hương vị hòa quyện giữa kem và nho tươi." 
    },
    { 
      id: "2", 
      name: "Macaron", 
      price: 150000, 
      image: require("./../../assets/images/macaroncake.jpg"), 
      description: "Macaron ngọt ngào, béo ngậy, là món bánh nổi tiếng từ nước Pháp. Vỏ bánh giòn tan, kết hợp với nhân kem mềm mịn, đầy hương vị. Đa dạng về màu sắc và hương vị, Macaron là sự lựa chọn lý tưởng cho những ai yêu thích bánh ngọt." 
    },
    { 
      id: "3", 
      name: "Sandwich", 
      price: 35000, 
      image: require("./../../assets/images/sanw.jpg"), 
      description: "Sandwich kẹp thịt với lớp bánh mềm mịn và lớp nhân thịt tươi ngon, bổ dưỡng. Kết hợp cùng các loại rau tươi và sốt đặc biệt, món ăn này phù hợp cho bữa sáng hoặc bữa ăn nhẹ trong ngày. Vừa tiện lợi, vừa đầy đủ dinh dưỡng." 
    },
    { 
      id: "4", 
      name: "Bánh matcha", 
      price: 50000, 
      image: require("./../../assets/images/matchacake.jpg"), 
      description: "Bánh matcha xanh mướt, thanh mát với hương vị matcha đặc trưng từ Nhật Bản. Lớp bánh mềm mịn kết hợp với lớp kem matcha tạo nên hương vị cân bằng giữa vị ngọt và đắng nhẹ, là lựa chọn hoàn hảo cho những ai yêu thích trà xanh." 
    },
    { 
      id: "5", 
      name: "Cake ca cao sữa", 
      price: 255000, 
      image: require("./../../assets/images/socola.jpg"), 
      description: "Cake ca cao sữa với hương vị ca cao đậm đà, lớp kem sữa mịn màng. Bánh có kết cấu mềm mịn, thơm ngon, mang đến trải nghiệm tuyệt vời cho những ai yêu thích bánh ngọt. Đây là món bánh lý tưởng cho những buổi tiệc trà hoặc làm quà tặng." 
    },
    { 
      id: "6", 
      name: "Brown", 
      price: 45000, 
      image: require("./../../assets/images/bro.jpg"), 
      description: "Brown Chocolate với vị socola đậm đà, được làm từ nguyên liệu chất lượng cao. Lớp bánh dày và ẩm, kết hợp với vị ngọt vừa phải, tạo nên một món tráng miệng hoàn hảo. Đây là lựa chọn lý tưởng cho những tín đồ của socola." 
    },
  ];
  

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [totalQuantity, setTotalQuantity] = useState(0);
  
  const handleCheckout = () => {
    alert("Thanh toán thành công! Cảm ơn bạn đã mua sắm tại ZhinFox cake.");
    // Reset cartItems to empty after successful checkout
    setCart([]); // Làm rỗng giỏ hàng
    setTotalQuantity(0); // Đặt lại số lượng tổng cộng về 0
  };

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      setTotalQuantity(totalQuantity + 1); // Tăng số lượng
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotalQuantity(totalQuantity + 1); // Tăng số lượng
    }
    
    Alert.alert("Thêm vào giỏ hàng", `${product.name} đã được thêm vào giỏ hàng.`);
  };

  const handleQuantityChange = (id, change) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        const updatedQuantity = newQuantity > 0 ? newQuantity : 1; // Đảm bảo số lượng không âm
        setTotalQuantity(totalQuantity + (updatedQuantity - item.quantity)); // Cập nhật tổng số lượng
        return { ...item, quantity: updatedQuantity };
      }
      return item;
    }));
  };
  
  
  

  const handleProductPress = (product) => {
    setSelectedProduct(product);
    setScreen("productDetail");
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const [bannerAnimation] = useState(new Animated.Value(1));
  

  useEffect(() => {
    const animateBanner = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(bannerAnimation, {
            toValue: 1.05, // Tăng kích thước lên 5%
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(bannerAnimation, {
            toValue: 1, // Trở về kích thước ban đầu
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
  
    animateBanner();
  
    return () => bannerAnimation.stop(); // Dừng animation khi component bị tháo gỡ
  }, [bannerAnimation]);
  

  const renderCart = () => (
    <View style={styles.cartContainer}>
      <Text style={styles.cartTitle}>Giỏ Hàng</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={item.image} style={styles.cartImage} />
            <Text style={styles.cartItemName}>{item.name}</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleQuantityChange(item.id, 1)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.cartItemPrice}>{(item.price * item.quantity).toLocaleString()} VNĐ</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
      <Text style={styles.totalPrice}>Tổng tiền: {calculateTotal().toLocaleString()} VNĐ</Text>
    <TouchableOpacity onPress={handleCheckout} style={styles.checkoutButton}>
      <Text style={styles.checkoutButtonText}>Thanh toán</Text>
    </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsCartVisible(false)} style={styles.backButton}>
        <Text style={styles.backButtonText}>Quay về</Text>
      </TouchableOpacity>
    </View>
  );
  
  const renderProductDetail = () => (
    <View style={styles.productDetailContainer}>
      <View style={styles.productDetailContent}>
        <Image source={selectedProduct.image} style={styles.productDetailImage} />
        <Text style={styles.productDetailName}>{selectedProduct.name}</Text>
        <Text style={styles.productDetailPrice}>{selectedProduct.price.toLocaleString()} VNĐ</Text> {/* Added Price */}
        <Text style={styles.productDetailStock}>Số lượng tồn: 10</Text>
        <Text style={styles.productDetailDescription}>{selectedProduct.description}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(selectedProduct)}
        >
          <Text style={styles.buttonText}>Thêm</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => setScreen("products")} style={styles.backButton}>
        <Text style={styles.backButtonText}>Quay về</Text>
      </TouchableOpacity>
    </View>
  );
  

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0.9,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);

    return () => clearInterval(interval);
  }, [animation]);

  return (
    <SafeAreaView style={styles.container}>
      {screen === "login" && (
        <View style={styles.formContainer}>
          <View style={styles.avatarContainer}>
            <Image source={require("./../../assets/images/avt.png")} style={styles.logo} />
          </View>
          <Text style={styles.title}>Đăng Nhập</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng Nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen("forgotPassword")}>
            <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen("register")}>
            <Text style={styles.register}>Đăng ký tài khoản</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === "register" && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Đăng Ký</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />
                    <TextInput
            style={styles.input}
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Đăng Ký</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen("login")}>
            <Text style={styles.register}>Quay về đăng nhập</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === "forgotPassword" && (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Quên Mật Khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
            <Text style={styles.buttonText}>Gửi yêu cầu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen("login")}>
            <Text style={styles.register}>Quay về đăng nhập</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === "products" && (
        <View style={styles.productsContainer}>
         
          
          {/* Thêm Banner */}
          <Animated.View style={{ transform: [{ scale: bannerAnimation }] }}>
            <Image
              source={require("./../../assets/banner1.jpg")}
              style={styles.bannerImage}
            />
          </Animated.View>
          
          <View style={styles.header}>
            <TextInput
              style={styles.searchBar}
              placeholder="Tìm kiếm sản phẩm"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <TouchableOpacity onPress={() => setIsCartVisible(true)} style={styles.cartIconContainer}>
              <Icon name="shopping-cart" size={25} />
              {totalQuantity > 0 && (
                <Text style={styles.cartQuantity}>{totalQuantity}</Text>
              )}
            </TouchableOpacity>
          </View>
        
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.productCard}>
                <Image source={item.image} style={styles.productImage} />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price.toLocaleString()} VNĐ</Text>
                <TouchableOpacity
                  style={styles.addToCartButton}
                  onPress={() => handleAddToCart(item)}
                >
                  <Text style={styles.buttonText}>Thêm</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
       
        </View>
     
      )}

      {screen === "productDetail" && selectedProduct && renderProductDetail()}

      {isCartVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isCartVisible}
          onRequestClose={() => setIsCartVisible(false)}
        >
          <View style={styles.modalContainer}>
            {renderCart()}
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({

  
  
// });

