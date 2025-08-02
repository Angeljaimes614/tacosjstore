// Global variables
let products = [];
let cart = [];
let currentProduct = null;

// Product data structure
const productData = {
    tacos: {
        'm1': {
            name: 'YFEN M1',
            price: 980000,
            originalPrice: 1120000,
            description: 'TACO YFEN PROFESIONAL EN FIBRA DE CARBONO\nFLECHA 12,5 MM FIBRA DE CARBONO 100%\nCULATA MAPLE CANADIENSE\nSISTEMA DE PESAS\nSISTEMA EXTENSIÓN ENROSCABLE\nCASQUILLO MULTICAPAS YFEN\nVIROLA YFEN\nSUPRESOR IMPACTO YFEN\nEXTENSIÓN TELESCÓPICA YFEN\nESTUCHE YFEN',
            image: 'web/tacosbillar/m1/Diseño sin título.png',
            images: [
                'web/tacosbillar/m1/Diseño sin título.png',
                'web/tacosbillar/m1/Diseño sin título (1).png',
                'web/tacosbillar/m1/Diseño sin título (2).png',
                'web/tacosbillar/m1/Diseño sin título (3).png'
            ],
            category: 'tacos'
        },
        'M20': {
            name: 'TACO YFEN M20',
            price: 1220000,
            originalPrice: 1335000,
            description: 'TACO DE MARCA YFEN EN FIBRA DE CARBONO\nFLECHA DE 12,5 MM EN FIBRA DE CARBONO 100%\nCULATA EN MAPLE CANADIENSE CON AGARRE DE CUERO DE COLOR VERDE\nSISTEMA DE PESAS\nSISTEMA EXTENSIÓN ENROSCABLE\nESTUCHE YFEN\nEXTENSIÓN TELESCÓPICA YFEN',
            image: 'web/tacosbillar/M20/Diseño sin título.png',
            images: [
                'web/tacosbillar/M20/Diseño sin título.png',
                'web/tacosbillar/M20/ww.png',
                'web/tacosbillar/M20/Diseño sin título (4).png'
            ],
            category: 'tacos'
        },
        'M21': {
            name: 'TACO YFEN M21',
            price: 1150000,
            originalPrice: 1280000,
            description: 'TACO PROFESIONAL YFEN M21\nFIBRA DE CARBONO DE ALTA CALIDAD\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nSISTEMA DE PESAS AJUSTABLE',
            image: 'web/tacosbillar/M21/Diseño sin título.png',
            images: [
                'web/tacosbillar/M21/Diseño sin título.png',
                'web/tacosbillar/M21/Diseño sin título (1).png',
                'web/tacosbillar/M21/Stick Billiard Play Carbon Yfen M4 Diameter.png'
            ],
            category: 'tacos'
        },
        'M23': {
            name: 'TACO YFEN M23',
            price: 1300000,
            originalPrice: 1450000,
            description: 'TACO YFEN M23 PROFESIONAL\nFIBRA DE CARBONO PREMIUM\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nDISEÑO ELEGANTE Y FUNCIONAL',
            image: 'web/tacosbillar/M23/Diseño sin título.png',
            images: [
                'web/tacosbillar/M23/Diseño sin título.png',
                'web/tacosbillar/M23/Diseño sin título (1).png',
                'web/tacosbillar/M23/88.png'
            ],
            category: 'tacos'
        },
        'M29': {
            name: 'TACO YFEN M29',
            price: 1400000,
            originalPrice: 1550000,
            description: 'TACO YFEN M29 EDICIÓN ESPECIAL\nFIBRA DE CARBONO DE COMPETICIÓN\nFLECHA 12,5 MM ULTRA PRECISA\nCULATA MAPLE CANADIENSE PREMIUM',
            image: 'web/tacosbillar/M29/Diseño sin título.png',
            images: [
                'web/tacosbillar/M29/Diseño sin título.png',
                'web/tacosbillar/M29/Diseño sin título (1).png',
                'web/tacosbillar/M29/Diseño sin título (2).png'
            ],
            category: 'tacos'
        },
        'M2S': {
            name: 'TACO YFEN M2S',
            price: 1050000,
            originalPrice: 1200000,
            description: 'TACO YFEN M2S SERIE ESPECIAL\nFIBRA DE CARBONO\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nACABADO PREMIUM',
            image: 'web/tacosbillar/M2S/Diseño sin título.png',
            category: 'tacos'
        },
        'M2': {
            name: 'TACO YFEN M2',
            price: 950000,
            originalPrice: 1100000,
            description: 'TACO YFEN M2 CLÁSICO\nFIBRA DE CARBONO\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nDISEÑO TRADICIONAL',
            image: 'web/tacosbillar/M2/Diseño sin título.png',
            category: 'tacos'
        },
        'M6black': {
            name: 'TACO YFEN M6 BLACK',
            price: 1180000,
            originalPrice: 1320000,
            description: 'TACO YFEN M6 EDICIÓN NEGRA\nFIBRA DE CARBONO NEGRA\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nDISEÑO ELEGANTE EN NEGRO',
            image: 'web/tacosbillar/M6black/Diseño sin título.png',
            category: 'tacos'
        },
        'predator_fs': {
            name: 'PREDATOR FS',
            price: 2500000,
            originalPrice: 2800000,
            description: 'TACO PREDATOR FS PROFESIONAL\nTECNOLOGÍA PREDATOR\nFLECHA DE ALTA PRECISIÓN\nCULATA PREMIUM\nPARA JUGADORES PROFESIONALES',
            image: 'web/tacosbillar/Predator FS/Diseño sin título.png',
            category: 'tacos'
        },
        'predator_p3': {
            name: 'PREDATOR P3',
            price: 2200000,
            originalPrice: 2500000,
            description: 'TACO PREDATOR P3\nTECNOLOGÍA AVANZADA PREDATOR\nFLECHA DE COMPETICIÓN\nCULATA DE ALTA CALIDAD\nRENDIMIENTO SUPERIOR',
            image: 'web/tacosbillar/Predator P3/Diseño sin título.png',
            category: 'tacos'
        },
        'predator_king': {
            name: 'PREDATOR KING',
            price: 3000000,
            originalPrice: 3300000,
            description: 'TACO PREDATOR KING EDICIÓN LIMITADA\nLA MÁXIMA EXPRESIÓN DE PREDATOR\nFLECHA ULTRA PRECISA\nCULATA PREMIUM\nPARA CAMPEONES',
            image: 'web/tacosbillar/Predator king/Diseño sin título.png',
            category: 'tacos'
        },
        'taco_salto': {
            name: 'TACO DE SALTO Y SALIDA YFEN',
            price: 850000,
            originalPrice: 950000,
            description: 'TACO ESPECIALIZADO PARA SALTO Y SALIDA\nDISEÑO ESPECÍFICO YFEN\nMANGO ERGONÓMICO\nPESO OPTIMIZADO\nPARA TÉCNICAS ESPECIALES',
            image: 'web/tacosbillar/TACO DE SALTO Y SALIDA YFEN/Diseño sin título.png',
            category: 'tacos'
        },
        'm10': {
            name: 'TACO YFEN M10',
            price: 1350000,
            originalPrice: 1500000,
            description: 'TACO YFEN M10 AVANZADO\nFIBRA DE CARBONO SUPERIOR\nFLECHA 12,5 MM PRECISIÓN\nCULATA MAPLE CANADIENSE\nTECNOLOGÍA AVANZADA',
            image: 'web/tacosbillar/m10/Diseño sin título.png',
            category: 'tacos'
        },
        'm19': {
            name: 'TACO YFEN M19',
            price: 1100000,
            originalPrice: 1250000,
            description: 'TACO YFEN M19\nFIBRA DE CARBONO\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nCALIDAD PROFESIONAL',
            image: 'web/tacosbillar/m19/Diseño sin título.png',
            category: 'tacos'
        },
        'm3': {
            name: 'TACO YFEN M3',
            price: 1000000,
            originalPrice: 1150000,
            description: 'TACO YFEN M3\nFIBRA DE CARBONO\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nDISEÑO CLÁSICO',
            image: 'web/tacosbillar/m3/Diseño sin título.png',
            category: 'tacos'
        },
        'm3s': {
            name: 'TACO YFEN M3S',
            price: 1080000,
            originalPrice: 1230000,
            description: 'TACO YFEN M3S SERIE ESPECIAL\nFIBRA DE CARBONO\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nACABADO ESPECIAL',
            image: 'web/tacosbillar/m3s/Diseño sin título.png',
            category: 'tacos'
        },
        'm4': {
            name: 'TACO YFEN M4',
            price: 1120000,
            originalPrice: 1270000,
            description: 'TACO YFEN M4\nFIBRA DE CARBONO\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nRENDIMIENTO SUPERIOR',
            image: 'web/tacosbillar/m4/Diseño sin título.png',
            category: 'tacos'
        },
        'm7': {
            name: 'TACO YFEN M7',
            price: 1250000,
            originalPrice: 1400000,
            description: 'TACO YFEN M7\nFIBRA DE CARBONO AVANZADA\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nTECNOLOGÍA SUPERIOR',
            image: 'web/tacosbillar/m7/Diseño sin título.png',
            category: 'tacos'
        },
        'm9': {
            name: 'TACO YFEN M9',
            price: 1320000,
            originalPrice: 1470000,
            description: 'TACO YFEN M9\nFIBRA DE CARBONO PREMIUM\nFLECHA 12,5 MM\nCULATA MAPLE CANADIENSE\nCALIDAD EXCEPCIONAL',
            image: 'web/tacosbillar/m9/Diseño sin título.png',
            category: 'tacos'
        },
        'tiger': {
            name: 'TACO TIGER',
            price: 1800000,
            originalPrice: 2000000,
            description: 'TACO TIGER PROFESIONAL\nDISEÑO TIGER EXCLUSIVO\nFIBRA DE CARBONO PREMIUM\nFLECHA DE ALTA PRECISIÓN\nPARA JUGADORES EXIGENTES',
            image: 'web/tacosbillar/tiger/Diseño sin título.png',
            category: 'tacos'
        }
    },
    accesorios: {
        'bolas_entrenamiento': {
            name: 'Bolas de Entrenamiento',
            price: 150000,
            originalPrice: 180000,
            description: 'Set de bolas de entrenamiento profesional\nMaterial de alta calidad\nPerfectas para práctica\nDuraderas y resistentes',
            image: 'web/Accesorios/Bolas de entrenamiento/Diseño sin título (2).png',
            category: 'accesorios'
        },
        'estuche_crical': {
            name: 'Estuche Crical',
            price: 120000,
            originalPrice: 140000,
            description: 'Estuche Crical de alta calidad\nProtección superior\nDiseño elegante\nCompartimentos organizados',
            image: 'web/Accesorios/Estuches/Crical/Diseño sin título (1).png',
            category: 'accesorios'
        },
        'estuche_diamond': {
            name: 'Estuche Diamond',
            price: 180000,
            originalPrice: 210000,
            description: 'Estuche Diamond premium\nMateriales de lujo\nProtección máxima\nDiseño sofisticado',
            image: 'web/Accesorios/Estuches/Diamond/Diseño sin título (1).png',
            category: 'accesorios'
        },
        'estuche_yfen': {
            name: 'Estuche Yfen',
            price: 100000,
            originalPrice: 120000,
            description: 'Estuche Yfen original\nCalidad garantizada\nDiseño funcional\nProtección confiable',
            image: 'web/Accesorios/Estuches/Yfen/Diseño sin título.png',
            category: 'accesorios'
        },
        'extension_1': {
            name: 'Extensión #1',
            price: 80000,
            originalPrice: 95000,
            description: 'Extensión profesional #1\nMaterial resistente\nFácil instalación\nCompatible con la mayoría de tacos',
            image: 'web/Accesorios/Extensiones/extension1/1111.png',
            images: [
                'web/Accesorios/Extensiones/extension1/1111.png',
                'web/Accesorios/Extensiones/extension1/121.png',
                'web/Accesorios/Extensiones/extension1/1212.png'
            ],
            category: 'accesorios'
        },
        'extension_yfen': {
            name: 'Extensión Yfen',
            price: 90000,
            originalPrice: 110000,
            description: 'Extensión Yfen original\nCalidad superior\nDiseño ergonómico\nCompatibilidad garantizada',
            image: 'web/Accesorios/Extensiones/yfen/Diseño sin título (1).png',
            category: 'accesorios'
        },
        'guantes_ibs': {
            name: 'Guantes IBS',
            price: 45000,
            originalPrice: 55000,
            description: 'Guantes IBS profesionales\nMaterial transpirable\nAjuste perfecto\nMejor control del taco',
            image: 'web/Accesorios/Guantes/IBS/Diseño sin título.png',
            images: [
                'web/Accesorios/Guantes/IBS/Diseño sin título.png',
                'web/Accesorios/Guantes/IBS/Diseño sin título (1).png',
                'web/Accesorios/Guantes/IBS/Diseño sin título (2).png',
                'web/Accesorios/Guantes/IBS/Diseño sin título (3).png'
            ],
            category: 'accesorios'
        },
        'accesorio_ibs': {
            name: 'Accesorio IBS',
            price: 35000,
            originalPrice: 40000,
            description: 'Accesorio profesional IBS\nCalidad premium\nDiseño ergonómico\nFácil instalación\nCompatible con todos los tacos',
            image: 'web/Accesorios/IBS/Diseño sin título.png',
            images: ['web/Accesorios/IBS/Diseño sin título.png'],
            category: 'accesorios'
        },
        'pica_casquillos_3en1': {
            name: 'Pica Casquillos 3 en 1',
            price: 35000,
            originalPrice: 45000,
            description: 'Herramienta 3 en 1\nPica casquillos multifuncional\nDiseño compacto\nFácil de usar',
            image: 'web/Accesorios/Pica casquillos/3 en 1/Diseño sin título (1).png',
            category: 'accesorios'
        },
        'porta_tizas': {
            name: 'Porta Tizas',
            price: 25000,
            originalPrice: 30000,
            description: 'Porta tizas práctico\nDiseño funcional\nFácil acceso\nMaterial duradero',
            image: 'web/Accesorios/PortaTizas/Diseño sin título.png',
            category: 'accesorios'
        },
        'tizas': {
            name: 'Tizas Profesionales',
            price: 15000,
            originalPrice: 20000,
            description: 'Tizas de alta calidad\nMejor adherencia\nDuración superior\nPack de 12 unidades',
            image: 'web/Accesorios/Tizas/Diseño sin título.png',
            category: 'accesorios'
        }
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    loadCart();
    createFloatingParticles();
    setupScrollAnimations();
    addLoadingEffects();
    setupParallaxEffect();
    addInteractiveEffects();
    setupContactForm();
});

// Load products from data
function loadProducts() {
    products = [];
    
    // Load tacos
    Object.keys(productData.tacos).forEach(key => {
        products.push({
            id: key,
            ...productData.tacos[key]
        });
    });
    
    // Load accessories
    Object.keys(productData.accesorios).forEach(key => {
        products.push({
            id: key,
            ...productData.accesorios[key]
        });
    });
    
    displayProducts(products);
}

// Display products in the grid
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);
    
    // Add advanced hover effects
    card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='logo-banner/Jstore.png'">
            ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ''}
            <div class="product-overlay">
                <i class="fas fa-eye"></i>
                <span>Ver Detalles</span>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description.split('\n')[0]}</p>
            <div class="product-price">
                <span class="current-price">$${formatPrice(product.price)}</span>
                <span class="original-price">$${formatPrice(product.originalPrice)}</span>
            </div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${product.id}')">
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
            </button>
        </div>
    `;
    
    return card;
}

// Format price with thousands separator
function formatPrice(price) {
    return price.toLocaleString('es-CO');
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => handleFilter(button));
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('productModal');
        const cartModal = document.getElementById('cartModal');
        if (event.target === modal) {
            closeModal();
        }
        if (event.target === cartModal) {
            toggleCart();
        }
    });
    

}

// Handle search functionality
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
    
    let filteredProducts = products;
    
    // Apply category filter
    if (activeFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === activeFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

// Handle filter functionality
function handleFilter(button) {
    // Remove active class from all buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    // Trigger search to apply filter
    handleSearch();
}

// Open product modal
function openProductModal(product) {
    currentProduct = product;
    const modal = document.getElementById('productModal');
    
    // Add loading state
    const modalImage = document.getElementById('modalImage');
    modalImage.style.opacity = '0';
    modalImage.src = product.image;
    modalImage.onerror = function() {
        this.src = 'logo-banner/Jstore.png';
    };
    modalImage.onload = function() {
        this.style.transition = 'opacity 0.3s ease';
        this.style.opacity = '1';
    };
    
    // Create image gallery if multiple images exist
    if (product.images && product.images.length > 1) {
        const imageGallery = document.createElement('div');
        imageGallery.className = 'image-gallery';
        imageGallery.innerHTML = product.images.map((img, index) => 
            `<img src="${img}" alt="${product.name} ${index + 1}" onclick="changeModalImage('${img}')" class="gallery-thumb">`
        ).join('');
        
        const modalContent = modal.querySelector('.modal-content');
        const existingGallery = modalContent.querySelector('.image-gallery');
        if (existingGallery) {
            existingGallery.remove();
        }
        modalContent.insertBefore(imageGallery, modalContent.querySelector('.modal-info'));
    }
    
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').innerHTML = product.description.replace(/\n/g, '<br>');
    document.getElementById('modalPrice').textContent = `$${formatPrice(product.price)}`;
    document.getElementById('modalOriginalPrice').textContent = `$${formatPrice(product.originalPrice)}`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close product modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.animation = '';
        document.body.style.overflow = 'auto';
    }, 300);
    currentProduct = null;
}

// Change modal image for gallery
function changeModalImage(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    modalImage.style.opacity = '0';
    
    // Update active thumbnail
    const gallery = document.querySelector('.image-gallery');
    if (gallery) {
        const thumbs = gallery.querySelectorAll('.gallery-thumb');
        thumbs.forEach(thumb => {
            if (thumb.src.includes(imageSrc.split('/').pop())) {
                thumb.style.borderColor = '#1a472a';
                thumb.style.transform = 'scale(1.1)';
            } else {
                thumb.style.borderColor = 'transparent';
                thumb.style.transform = 'scale(1)';
            }
        });
    }
    
    setTimeout(() => {
        modalImage.src = imageSrc;
        modalImage.onload = function() {
            this.style.opacity = '1';
        };
        modalImage.onerror = function() {
            this.src = 'logo-banner/Jstore.png';
        };
    }, 150);
}

// ===== CARRITO DE COMPRAS - NUEVA IMPLEMENTACIÓN =====

// Agregar producto al carrito
function addToCart(productId) {
    try {
        const product = products.find(p => p.id === productId);
        if (!product) {
            showNotification('Producto no encontrado', 'error');
            return;
        }
        
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        updateCartUI();
        saveCart();
        showNotification(`${product.name} agregado al carrito`, 'success');
        
    } catch (error) {
        console.error('Error al agregar al carrito:', error);
        showNotification('Error al agregar producto', 'error');
    }
}

// Agregar al carrito desde el modal
function addToCartFromModal() {
    if (currentProduct) {
        addToCart(currentProduct.id);
        closeModal();
    }
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    console.log('removeFromCart llamada con ID:', productId);
    try {
        const itemIndex = cart.findIndex(item => item.id === productId);
        
        if (itemIndex === -1) {
            showNotification('Producto no encontrado en el carrito', 'error');
            return;
        }
        
        const item = cart[itemIndex];
        
        if (item.quantity > 1) {
            // Si hay más de 1 unidad, solo reducir la cantidad
            item.quantity -= 1;
            showNotification(`Cantidad reducida. Quedan ${item.quantity} unidades`, 'success');
        } else {
            // Si solo hay 1 unidad, eliminar completamente el producto
            cart.splice(itemIndex, 1);
            showNotification('Producto eliminado del carrito', 'success');
        }
        
        updateCartUI();
        saveCart();
        
    } catch (error) {
        console.error('Error al eliminar del carrito:', error);
        showNotification('Error al eliminar producto', 'error');
    }
}

// Vaciar carrito completo
function clearCart() {
    try {
        cart = [];
        updateCartUI();
        saveCart();
        showNotification('Carrito vaciado', 'success');
    } catch (error) {
        console.error('Error al vaciar carrito:', error);
        showNotification('Error al vaciar carrito', 'error');
    }
}

// Actualizar interfaz del carrito
function updateCartUI() {
    try {
        const cartCount = document.getElementById('cartCount');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartCount || !cartItems || !cartTotal) {
            console.error('Elementos del carrito no encontrados');
            return;
        }
        
        // Actualizar contador
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        
        // Limpiar contenido
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<div class="empty-cart"><p>Tu carrito está vacío</p><p>¡Agrega algunos productos!</p></div>';
            cartTotal.textContent = '0';
            return;
        }
        
        // Agregar productos
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='logo-banner/Jstore.png'">
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <div class="cart-item-price">$${formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">Cantidad: ${item.quantity}</div>
                    <div class="cart-item-subtotal">Subtotal: $${formatPrice(item.price * item.quantity)}</div>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Eliminar producto" style="background: red; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; z-index: 1000; position: relative; pointer-events: auto;">
                        🗑️ Eliminar
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Actualizar total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = formatPrice(total);
        
    } catch (error) {
        console.error('Error al actualizar UI del carrito:', error);
    }
}

// Mostrar/ocultar carrito
function toggleCart() {
    try {
        const cartModal = document.getElementById('cartModal');
        if (cartModal) {
            const isVisible = cartModal.style.display === 'block';
            cartModal.style.display = isVisible ? 'none' : 'block';
            
            if (!isVisible) {
                updateCartUI(); // Actualizar al abrir
            }
        }
    } catch (error) {
        console.error('Error al mostrar/ocultar carrito:', error);
    }
}

// Finalizar compra
function checkout() {
    try {
        if (cart.length === 0) {
            showNotification('Tu carrito está vacío', 'error');
            return;
        }
        
        // Generar mensaje de WhatsApp
        let message = '🛒 *NUEVO PEDIDO - J STORE*\n\n';
        message += '📦 *PRODUCTOS:*\n';
        
        let total = 0;
        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            message += `\n${index + 1}. *${item.name}*\n`;
            message += `   • Cantidad: ${item.quantity}\n`;
            message += `   • Precio: $${formatPrice(item.price)}\n`;
            message += `   • Subtotal: $${formatPrice(subtotal)}\n`;
        });
        
        message += `\n💰 *TOTAL GENERAL: $${formatPrice(total)}*\n\n`;
        message += '✅ *Por favor confirma tu pedido*\n';
        message += '📍 *¿Necesitas información sobre envío?*\n\n';
        message += '¡Gracias por elegir J Store! 🎱✨';
        
        // Codificar mensaje
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/573142673051?text=${encodedMessage}`;
        
        // Mostrar notificación
        showNotification('Abriendo WhatsApp...', 'success');
        
        // Abrir WhatsApp
        setTimeout(() => {
            const opened = window.open(whatsappURL, '_blank');
            
            if (opened) {
                // Preguntar si vaciar carrito
                setTimeout(() => {
                    if (confirm('¿Deseas vaciar el carrito después de enviar el pedido?')) {
                        clearCart();
                        toggleCart();
                    }
                }, 1500);
            } else {
                showNotification('No se pudo abrir WhatsApp. Verifica tu navegador.', 'error');
            }
        }, 800);
        
    } catch (error) {
        console.error('Error en checkout:', error);
        showNotification('Error al procesar el pedido', 'error');
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('jstore_cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('jstore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2ed573;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Create floating particles effect
function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: linear-gradient(45deg, rgba(26, 71, 42, 0.3), rgba(255, 107, 53, 0.3));
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s infinite linear;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            observer.observe(card);
        });
    }, 100);
}

// Add loading effects
function addLoadingEffects() {
    // Add shimmer effect to images while loading
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.style.background = 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)';
            img.style.backgroundSize = '200px 100%';
            img.style.animation = 'shimmer 1.5s infinite';
            
            img.onload = () => {
                img.style.background = 'none';
                img.style.animation = 'none';
            };
        }
    });
}

// Setup parallax effect
function setupParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content, .hero::after');
        
        parallaxElements.forEach((element, index) => {
            const speed = index === 0 ? 0.5 : 0.3;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Add interactive effects
function addInteractiveEffects() {
    // Mouse tracking for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / centerY * 5;
            const rotateY = (centerX - x) / centerX * 5;
            
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
        
        hero.addEventListener('mouseleave', () => {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            }
        });
    }
    
    // Add magnetic effect to buttons
    document.querySelectorAll('.cta-button, .add-to-cart').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Enhanced product card creation with stagger animation
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);
    
    // Add advanced hover effects
    card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * 10;
        const rotateY = (centerX - x) / centerX * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.03)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
    });
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='logo-banner/Jstore.png'">
            ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ''}
            <div class="product-overlay">
                <i class="fas fa-eye"></i>
                <span>Ver Detalles</span>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description.split('\n')[0]}</p>
            <div class="product-price">
                <span class="current-price">$${formatPrice(product.price)}</span>
                <span class="original-price">$${formatPrice(product.originalPrice)}</span>
            </div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart('${product.id}')">
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
            </button>
        </div>
    `;
    
    return card;
}

// Enhanced modal opening with better animations
let currentImageIndex = 0;
let currentProductImages = [];

function openProductModal(product) {
    currentProduct = product;
    currentProductImages = product.images || [product.image];
    currentImageIndex = 0;
    
    const modal = document.getElementById('productModal');
    
    // Add loading state
    const modalImage = document.getElementById('modalImage');
    modalImage.style.opacity = '0';
    modalImage.src = currentProductImages[0];
    modalImage.onerror = function() {
        this.src = 'logo-banner/Jstore.png';
    };
    modalImage.onload = function() {
        this.style.transition = 'opacity 0.3s ease';
        this.style.opacity = '1';
    };
    
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalDescription').innerHTML = product.description.replace(/\n/g, '<br>');
    document.getElementById('modalPrice').textContent = `$${formatPrice(product.price)}`;
    document.getElementById('modalOriginalPrice').textContent = `$${formatPrice(product.originalPrice)}`;
    
    // Create image gallery carousel if product has multiple images
    const modalContent = modal.querySelector('.modal-content');
    let existingGallery = modalContent.querySelector('.image-gallery-carousel');
    if (existingGallery) {
        existingGallery.remove();
    }
    
    if (currentProductImages.length > 1) {
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'image-gallery-carousel';
        
        // Navigation arrows
        const prevBtn = document.createElement('button');
        prevBtn.className = 'gallery-nav-btn prev-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.onclick = () => navigateGallery(-1);
        prevBtn.title = 'Imagen anterior (←)';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'gallery-nav-btn next-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = () => navigateGallery(1);
        nextBtn.title = 'Imagen siguiente (→)';
        
        // Image counter
        const imageCounter = document.createElement('div');
        imageCounter.className = 'image-counter';
        imageCounter.textContent = `1 / ${currentProductImages.length}`;
        
        // Dots indicator
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'gallery-dots';
        
        currentProductImages.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
            dot.onclick = () => goToImage(index);
            dot.title = `Ir a imagen ${index + 1}`;
            dotsContainer.appendChild(dot);
        });
        
        galleryContainer.appendChild(prevBtn);
        galleryContainer.appendChild(nextBtn);
        galleryContainer.appendChild(imageCounter);
        galleryContainer.appendChild(dotsContainer);
        
        // Insert gallery after the main image
        const modalImage = modalContent.querySelector('#modalImage');
        modalImage.parentNode.insertBefore(galleryContainer, modalImage.nextSibling);
        
        // Update navigation visibility
        updateNavigationVisibility();
    }
    
    // Add keyboard navigation
    document.addEventListener('keydown', handleGalleryKeyboard);
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function navigateGallery(direction) {
    if (currentProductImages.length <= 1) return;
    
    currentImageIndex += direction;
    
    if (currentImageIndex >= currentProductImages.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentProductImages.length - 1;
    }
    
    updateGalleryDisplay();
}

function goToImage(index) {
    currentImageIndex = index;
    updateGalleryDisplay();
}

function updateGalleryDisplay() {
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.querySelector('.image-counter');
    const dots = document.querySelectorAll('.gallery-dot');
    
    // Update main image with smooth transition
    modalImage.style.opacity = '0';
    
    setTimeout(() => {
        modalImage.src = currentProductImages[currentImageIndex];
        modalImage.onload = function() {
            this.style.opacity = '1';
        };
        modalImage.onerror = function() {
            this.src = 'logo-banner/Jstore.png';
            this.style.opacity = '1';
        };
    }, 150);
    
    // Update counter
    if (imageCounter) {
        imageCounter.textContent = `${currentImageIndex + 1} / ${currentProductImages.length}`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndex);
    });
    
    updateNavigationVisibility();
}

function updateNavigationVisibility() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.style.opacity = currentProductImages.length > 1 ? '1' : '0.3';
        nextBtn.style.opacity = currentProductImages.length > 1 ? '1' : '0.3';
    }
}

// Enhanced modal closing
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.animation = '';
        document.body.style.overflow = 'auto';
    }, 300);
    currentProduct = null;
    
    // Remove keyboard navigation listener
    document.removeEventListener('keydown', handleGalleryKeyboard);
}

// Keyboard navigation for gallery
function handleGalleryKeyboard(event) {
    const modal = document.getElementById('productModal');
    if (modal.style.display !== 'block') return;
    
    if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigateGallery(-1);
    } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigateGallery(1);
    } else if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
    }
}

// Enhanced notification with better styling
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? '#2ed573' : type === 'error' ? '#ff4757' : '#ffa502';
    const icon = type === 'success' ? 'fas fa-check-circle' : type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-info-circle';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        z-index: 3000;
        animation: slideInRight 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 8px 25px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        max-width: 300px;
    `;
    
    notification.innerHTML = `
        <i class="${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Add click to dismiss
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    });
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 4000);
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Create WhatsApp message
            const whatsappMessage = `¡Hola! Soy ${name}\n\n` +
                `📧 Email: ${email}\n` +
                `📱 Teléfono: ${phone || 'No proporcionado'}\n\n` +
                `💬 Mensaje:\n${message}\n\n` +
                `Enviado desde J Store - Tacos de Billar`;
            
            const whatsappUrl = `https://wa.me/573142673051?text=${encodeURIComponent(whatsappMessage)}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success notification
            showNotification('¡Mensaje enviado! Te redirigimos a WhatsApp.', 'success');
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Add CSS animations for notifications and effects
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(120deg); }
        66% { transform: translateY(5px) rotate(240deg); }
        100% { transform: translateY(0px) rotate(360deg); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    .discount-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background: linear-gradient(45deg, #ff4757, #ff6b35);
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
        z-index: 2;
        animation: pulse 2s infinite;
    }
    
    .product-info {
        position: relative;
        z-index: 2;
    }
    
    .image-gallery {
        display: flex;
        gap: 10px;
        margin: 15px 0;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .gallery-thumb {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 8px;
        cursor: pointer;
        border: 2px solid transparent;
        transition: all 0.3s ease;
    }
    
    .gallery-thumb:hover {
        border-color: #1a472a;
        transform: scale(1.1);
    }
    
    .product-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(26, 71, 42, 0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        color: white;
        font-size: 0.9rem;
    }
    
    .product-card:hover .product-overlay {
        opacity: 1;
    }
    
    .product-overlay i {
        font-size: 1.5rem;
        margin-bottom: 8px;
    }
`;
document.head.appendChild(style);