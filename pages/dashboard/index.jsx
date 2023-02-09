import Router from "next/router";
import Swal from "sweetalert2";
import Image from "next/image";
import imgLogo from "../assets/logo.png";
import ListProduct from "../components/list-products";
import Footer from "../components/footer/footer.component";

const Dashboard = () => {
  const handleLogout = () => {
    Swal.fire({
      text: "Are you sure, you want to Logout!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
      width: "350px",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank you",
          showConfirmButton: false,
          timer: 1500,
          width: "350px",
        });
        Router.push("/");
      }
    });
  };
  return (
    <div className="bg-gray-100 min-h-screen text-slate-700">
      <nav className="bg-white p-6">
        <div className="flex items-center justify-between">
          <Image
            src={imgLogo} // Route of the image file
            height={100} // Desired size with correct aspect ratio
            width={100} // Desired size with correct aspect ratio
            alt="Your Name"
          />
          <button
            onClick={handleLogout}
            className="bg-indigo-500 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </nav>

      <ListProduct />
      <Footer />
    </div>
  );
};

export default Dashboard;
