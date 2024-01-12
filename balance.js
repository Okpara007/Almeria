// balance.js
document.addEventListener('DOMContentLoaded', function() {
    updateDisplayedBalance();
  });
  
  function updateDisplayedBalance() {
    var balance = parseFloat(localStorage.getItem('balance')) || 945384.21; // Default balance
    document.getElementById('balance').textContent = 'Available balance: $' + balance.toFixed(2);
  }
  
  document.getElementById('continue-button').addEventListener('click', function() {
    var balanceElement = document.getElementById('balance');
    var amountInput = document.getElementById('amount-input');
    var messageElement = document.getElementById('error-message');
    
    var balance = parseFloat(localStorage.getItem('balance')) || 945384.21; // Get balance from localStorage or set default
    var amount = parseFloat(amountInput.value);
  
    if (isNaN(amount) || amount <= 0) {
      messageElement.textContent = 'Please enter a valid amount.';
      messageElement.style.display = 'block';
      messageElement.style.color = 'red';
      return;
    }
  
    if (amount > balance) {
      messageElement.textContent = 'Insufficient balance.';
      messageElement.style.display = 'block';
      messageElement.style.color = 'red';
    } else {
      balance -= amount;
      localStorage.setItem('balance', balance.toFixed(2)); // Save the new balance
      updateDisplayedBalance();
  
      messageElement.textContent = 'Transfer successful!';
      messageElement.style.display = 'block';
      messageElement.style.color = 'green';
  
      amountInput.value = '';
    }
  });
  