import { Bitcoin, Wallet, CreditCard, Users } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-adrak-primary rounded-lg flex items-center justify-center">
                <Bitcoin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">ADrak Corporation</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Revolucionando o futuro financeiro com soluções cripto nativas
              inovadoras e seguras.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-adrak-primary rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Wallet className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-adrak-secondary rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors cursor-pointer">
                <CreditCard className="w-5 h-5 text-black" />
              </div>
              <div className="w-10 h-10 bg-adrak-primary rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Bitcoin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-adrak-secondary">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  ADrak Wallet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  BitKredit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  ADrak Pay
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Cryptography Lab
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-adrak-secondary">
              Empresa
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Investidores
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-adrak-secondary">
              Suporte
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-adrak-primary transition-colors"
                >
                  Status do Sistema
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 ADrak Corporation. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-adrak-primary transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-adrak-primary transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-adrak-primary transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
