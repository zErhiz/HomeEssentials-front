const Attendance = () => {
  return (
    <div className="p-14 bg-[#EDEBEB]">

      <div className="py-12 flex flex-wrap justify-center bg-[#EDEBEB] gap-12">
        <h2 className="text-2xl font-bold mb-4">Attendance Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
            <p>We accept major credit cards such as Visa, Mastercard, and American Express. We also support payments through PayPal.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Do you offer international shipping?</h3>
            <p>Yes, we offer international shipping to select countries. Please check our shipping policy for more information on eligible locations.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Can I return or exchange a product?</h3>
            <p>Yes, we have a hassle-free return and exchange policy. If you are not satisfied with your purchase, you can return the product within 30 days for a refund or exchange.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How long does shipping usually take?</h3>
            <p>Shipping times may vary depending on your location. Typically, domestic orders are delivered within 3-5 business days, while international orders may take longer.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Are your products eco-friendly?</h3>
            <p>We strive to offer a range of eco-friendly products. Look for our "sustainable" label on product listings to identify environmentally friendly options.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Can I track my order?</h3>
            <p>Yes, once your order is shipped, we will provide you with a tracking number. You can use this number to track the progress of your delivery.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Do you offer discounts for bulk orders?</h3>
            <p>Yes, we provide discounts for bulk orders. Please contact our customer support team for more information and to discuss your specific requirements.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">What is your warranty policy?</h3>
            <p>We offer a standard warranty of 1 year on all our products. If you encounter any issues with your purchase within this period, please reach out to our support team for assistance.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Can I cancel my order?</h3>
            <p>You can cancel your order within 24 hours of placing it. Please contact our customer support team with your order details to initiate the cancellation process.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How can I contact your customer support?</h3>
            <p>You can reach our customer support team through email at support@example.com or by calling our toll-free number +1-800-123-4567. Our team is available to assist you from Monday to Friday, 9 AM to 5 PM.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;