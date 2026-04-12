const products = []; // Armazenamento em memória

exports.registerProduct = (req, res) => {
    const { name, barcode, price, weightInGrams, material, ecoPoints } = req.body;

    // 1. Validação de campos obrigatórios
    if (!name || !barcode || !price || !material) {
        return res.status(400).json({ error: "Campos obrigatórios: name, barcode, price, material." });
    }

    // 2. Regra: Preço mínimo
    if (price < 0.01) {
        return res.status(400).json({ error: "O valor do produto não deve ser menor que 0.01." });
    }

    // 3. Regra: Formato do Código de Barras (EAN-13)
    const barcodeRegex = /^[0-9]{13}$/;
    if (!barcodeRegex.test(barcode)) {
        return res.status(400).json({ error: "O código de barras deve conter exatamente 13 dígitos numéricos." });
    }

    // 4. Regra: Unicidade do Código de Barras
    const alreadyExists = products.find(p => p.barcode === barcode);
    if (alreadyExists) {
        return res.status(409).json({ error: "Produto já cadastrado com este código de barras." });
    }

    // 5. Regra: Lista Branca de Materiais
    const validMaterials = ['Plástico', 'Vidro', 'Alumínio', 'Papel', 'TetraPak'];
    if (!validMaterials.includes(material)) {
        return res.status(400).json({ error: "Material inválido. Use: Plástico, Vidro, Alumínio, Papel ou TetraPak." });
    }

    // 6. Regra: Limite de Eco-Pontos (Máximo 20% do preço)
    const maxEcoPoints = price * 0.2;
    if (ecoPoints > maxEcoPoints) {
        return res.status(400).json({ 
            error: `Eco-pontos excedem o limite permitido de 20% do valor (Máx: ${maxEcoPoints.toFixed(2)}).` 
        });
    }

    // Cadastro com sucesso
    const newProduct = { 
        id: products.length + 1, 
        name, 
        barcode, 
        price, 
        weightInGrams, 
        material, 
        ecoPoints: ecoPoints || 0,
        createdAt: new Date()
    };

    products.push(newProduct);
    return res.status(201).json(newProduct);
};