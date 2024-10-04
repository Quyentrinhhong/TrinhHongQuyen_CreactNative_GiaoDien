import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff5e1', // Màu nền vàng kem
      },
      formContainer: {
        padding: 20,
      },
      avatarContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      bannerImage: {
        width: '100%',
        height: 150, // Bạn có thể điều chỉnh chiều cao theo ý muốn
        marginBottom: 20,
      },
      title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ff69b4', // Màu hồng tươi
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: '#ffcccb', // Hồng pastel
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      button: {
        backgroundColor: '#f4abb4', // Hồng tươi cho nút
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
      

      },
      forgotPassword: {
        color: '#ff69b4',
        textAlign: 'center',
        marginTop: 10,
      },
      register: {
        color: '#ff69b4',
        textAlign: 'center',
        marginTop: 10,
      },
      productsContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFAF0', // Màu nền nhạt nhẹ nhàng phù hợp với bánh kẹo
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      searchBar: {
        flex: 1,
        borderColor: '#FFD700', // Màu vàng nhẹ để làm nổi bật phần tìm kiếm
        borderWidth: 1,
        borderRadius: 10, // Tạo viền tròn mềm mại
        paddingHorizontal: 15,
        marginRight: 10,
        height: 50,
        backgroundColor: '#FFF8DC', // Màu nền sáng
      },
      
      productCard: {
        flex: 1,
        margin: 10,
        padding: 15,
        backgroundColor: '#FFF5EE', // Màu nền như màu kem
        borderRadius: 10,
        alignItems: 'center',
        borderColor: '#FFA07A', // Màu viền nhẹ tạo sự ngọt ngào
        borderWidth: 1,
      },
      productImage: {
        width: 100,
        height: 100,
        borderRadius: 10, // Làm hình ảnh mềm mại hơn
      },
      productName: {
        marginVertical: 5,
        fontWeight: 'bold',
        color: '#8B4513', // Màu nâu tạo cảm giác ấm áp như bánh ngọt
      },
      productPrice: {
        color: '#FF4500', // Màu cam nổi bật cho giá cả
        fontWeight: 'bold',
      },
      addToCartButton: {
        backgroundColor: '#FF6347', // Màu cam đỏ nhẹ thu hút
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
      },
      cartContainer: {
        flex: 1,
        width: '90%',
        padding: 20,
        backgroundColor: '#FFF8DC',
        alignSelf: 'center',
        borderRadius: 10,
      },
      
      cartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#8B4513',
      },
      cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
      },
      cartImage: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
      },
      cartItemName: {
        flex: 1,
        color: '#8B4513',
      },
      cartItemPrice: {
        color: '#FF4500',
        fontWeight: 'bold',
      },
      totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#FF4500',
      },
      checkoutButton: {
        backgroundColor: '#FF6347',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
      },
      checkoutButtonText: {
        color: "#fff",
        fontSize: 16,
      },
      backButton: {
        backgroundColor: '#FFDAB9', // Màu cam nhẹ cho nút quay lại
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 30,
      },
      backButtonText: {
        color: '#8B4513',
        fontSize: 16,
        textAlign: 'center',
      },
      productDetailContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFAF0',
      },
      productDetailContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      productDetailImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10,
        marginBottom: 10,
      },
      productDetailName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#8B4513',
      },
      productDetailStock: {
        marginBottom: 10,
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
      },
      productDetailDescription: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#8B4513',
        paddingHorizontal: 10,
      },
      addButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 12,
        paddingHorizontal: 50,
        borderRadius: 10,
        marginTop: 20,
      },
      modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      quantityButton: {
        backgroundColor: '#FF6347',
        color: '#fff',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
      },
      quantityText: {
        width: 30,
        textAlign: 'center',
      },
      cartIconContainer: {
        position: 'relative', // Để có thể sử dụng absolute positioning cho số lượng
      },
      cartQuantity: {
        position: 'absolute',
        right: -10,
        top: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 5,
        fontSize: 12,
      },
    
});