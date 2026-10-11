// Simple AI Agent Simulation for Demo
const messagesDiv = document.getElementById('messages');
function addMessage(sender, text) {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${sender}:</strong> ${text}`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;
    addMessage('You', text);
    input.value = '';
    // Simple rule-based "AI" responses (replace with real LLM API in full system)
    let response = "I'm the AI Support Agent. How can I help with your purchase or account?";
    if (text.toLowerCase().includes('refund')) response = "Refunds are handled autonomously. Please provide order ID for processing.";
    if (text.toLowerCase().includes('product')) response = "Our products are AI-curated for maximum value. Check the catalog above!";
    if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) response = "Prices are dynamically optimized by the Pricing Agent. Current deals shown.";
    setTimeout(() => addMessage('AI Agent', response), 500);
}
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
// Buy buttons - in production, redirect to Stripe Checkout with env vars
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.dataset.product;
        const price = btn.dataset.price;
        alert(`Redirecting to secure checkout for ${product} ($${price}). Add your Stripe link or API here.\nFor full autonomy, integrate Stripe Checkout session creation.`);
        // Example: window.location.href = 'https://buy.stripe.com/your-link'; // User adds variable
    });
});
// Init
addMessage('AI Agent', 'Hello! I'm your autonomous customer support. Ask me anything about the store.');