import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, CreditCard, Bitcoin, Users } from "lucide-react"

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Wallet className="w-8 h-8 text-adrak-primary" />,
      title: "ADrak Wallet",
      subtitle: "Conta de Pagamentos Cripto",
      description:
        "Conta integrada que permite pagamentos diretos em cripto entre usuários sem taxas e com alta segurança. Desfrute da conveniência de baixas taxas para conversão de rede.",
      features: [
        "Pagamentos diretos entre usuários",
        "Zero taxas de transação",
        "Alta segurança criptográfica",
        "Baixas taxas de conversão"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      id: 2,
      icon: <CreditCard className="w-8 h-8 text-adrak-secondary" />,
      title: "BitKredit",
      subtitle: "Cartão de Crédito Bitcoin",
      description:
        "Cartão de crédito inovador sem bandeiras tradicionais, utilizando Bitcoin como garantia através de smart contracts. Pagamentos via NFC diretamente em Bitcoin.",
      features: [
        "Bitcoin como garantia colateral",
        "Smart contracts automáticos",
        "Pagamentos NFC em Bitcoin",
        "Sem bandeiras tradicionais"
      ],
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      id: 3,
      icon: <Bitcoin className="w-8 h-8 text-adrak-primary" />,
      title: "ADrak Pay",
      subtitle: "Pagamentos Cripto para Comércio",
      description:
        "Permite que comerciantes aceitem criptomoedas e recebam em reais, com integração ao PIX. Treinamento básico em apenas 8 minutos para implementação.",
      features: [
        "Aceite cripto, receba em reais",
        "Integração com PIX",
        "Treinamento em 8 minutos",
        "Liquidez para mercado local"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-adrak-secondary" />,
      title: "Soberaniks Lab",
      subtitle: "Gestora e Laboratório de Investimentos",
      description:
        "Tokenização de ativos reais criando uma bolsa de valores cripto. Laboratório de criptografia cobrindo a relação entre produtos de investimento e investidores.",
      features: [
        "Tokenização de ativos reais",
        "Bolsa de valores cripto",
        "Negociação soberana de ativos",
        "Laboratório de criptografia"
      ],
      color: "bg-yellow-50 border-yellow-200"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-adrak-primary">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Um ecossistema completo de soluções financeiras baseadas em
            criptomoedas, projetado para revolucionar a forma como você lida com
            dinheiro digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map(service => (
            <Card
              key={service.id}
              className={`${service.color} hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-gray-700">
                      {service.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-adrak-primary rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full bg-adrak-primary hover:bg-green-600 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open("https://wa.me/5547996823645", "_blank")}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
