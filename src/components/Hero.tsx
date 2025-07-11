import { Button } from "@/components/ui/button"
import { Bitcoin, Wallet, CreditCard } from "lucide-react"
import React, { useState } from "react"

const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleNotifyClick = () => {
    setModalOpen(true)
  }
  const handleModalConfirm = () => {
    setModalOpen(false)
    window.open("https://forms.gle/BviLPofDyq3atFir8", "_blank")
  }
  const handleModalCancel = () => {
    setModalOpen(false)
  }
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
      style={{
        backgroundImage: "url(/Workstation%20ADrak.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-adrak-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-adrak-secondary rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-adrak-primary rounded-lg flex items-center justify-center">
            <Bitcoin className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white">
            ADrak Corporation
          </h1>
        </div>
        <Button
          className="bg-adrak-primary hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          onClick={() => window.open("https://wa.me/5547996823645", "_blank")}
        >
          Entre em Contato
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-adrak-secondary text-black rounded-full text-sm font-semibold mb-6">
              🚀 Revolucionando o Futuro Financeiro
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Soluções Financeiras
            <span className="block text-adrak-primary">Cripto Nativas</span>
          </h1>

          <div className="mb-8" style={{ minHeight: "64px" }}></div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {/* Espaço vazio para manter o espaçamento */}
          </div>
          {/* Modal */}
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
              <div className="bg-white rounded-lg p-8 max-w-sm w-full shadow-xl text-center">
                <h2 className="text-xl font-bold mb-4 text-gray-900">Aviso</h2>
                <p className="mb-6 text-gray-700">
                  Você será encaminhado para um formulário criado pela equipe.
                  Deseja continuar?
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    className="bg-adrak-primary text-white px-6"
                    onClick={handleModalConfirm}
                  >
                    Confirmar
                  </Button>
                  <Button
                    variant="outline"
                    className="border-adrak-secondary text-adrak-secondary px-6"
                    onClick={handleModalCancel}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            </div>
          )}
          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Wallet className="w-12 h-12 text-adrak-primary mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                ADrak Wallet
              </h3>
              <p className="text-gray-400 text-center">
                Pagamentos cripto sem taxas entre usuários
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CreditCard className="w-12 h-12 text-adrak-secondary mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                BitKredit
              </h3>
              <p className="text-gray-400 text-center">
                Cartão de crédito com Bitcoin como garantia
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Bitcoin className="w-12 h-12 text-adrak-primary mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                ADrak Pay
              </h3>
              <p className="text-gray-400 text-center">
                Soluções de pagamento cripto para comércio
              </p>
            </div>
          </div>
          {/* Nova sessão com texto e botões */}
          <section className="mt-16 flex flex-col items-center justify-center">
            <p className="text-xl md:text-2xl text-white text-center mb-6 max-w-3xl">
              Desbloqueie o poder das criptomoedas com nosso ecossistema
              completo de pagamentos, crédito e investimentos descentralizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-adrak-primary hover:bg-green-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={handleScrollToServices}
              >
                Explore Nossos Serviços
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-adrak-secondary text-adrak-secondary hover:bg-adrak-secondary hover:text-black px-8 py-4 text-lg rounded-lg transition-all duration-300"
                onClick={handleNotifyClick}
              >
                Me avise!
              </Button>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Hero
