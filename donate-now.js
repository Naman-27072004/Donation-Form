document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".donation-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            let totalAmount = 0;
            document.querySelectorAll(".donation-checkbox:checked").forEach(checkedBox => {
                totalAmount += parseInt(checkedBox.value); // Use value instead of dataset.amount
            });
            document.getElementById("total-amount").value = totalAmount || "";
        });
    });
});
