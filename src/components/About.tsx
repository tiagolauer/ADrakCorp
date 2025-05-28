import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Bitcoin, Wallet } from "lucide-react"

const About = () => {
  const principles = [
    {
      icon: <Wallet className="w-8 h-8 text-adrak-primary" />,
      title: "Segurança e Privacidade",
      description:
        "Ecossistema cripto completo com autenticação dois fatores, proteção contra fraudes e criptografia inerente às criptomoedas para garantir privacidade e confiança nas transações."
    },
    {
      icon: <Users className="w-8 h-8 text-adrak-secondary" />,
      title: "Inclusão Financeira",
      description:
        "Soluções financeiras para população historicamente marginalizada pelos bancos tradicionais. Qualquer pessoa com acesso à internet pode ingressar na economia digital."
    },
    {
      icon: <Bitcoin className="w-8 h-8 text-adrak-primary" />,
      title: "Eficiência Operacional",
      description:
        "Eliminamos intermediários tradicionais oferecendo transferências em tempo real, tanto locais quanto cross-border, com custos consideravelmente mais baixos."
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fundamentos{" "}
            <span className="text-adrak-primary">Principiológicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa missão é democratizar o acesso aos serviços financeiros
            através da tecnologia blockchain, promovendo inclusão, segurança e
            eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {principles.map((principle, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100"
            >
              <CardHeader>
                <div className="mx-auto p-4 bg-gray-50 rounded-2xl w-fit mb-4">
                  {principle.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {principle.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {principle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-adrak-primary to-green-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Nossa Visão</h3>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto opacity-95">
            Ser a ponte entre o sistema financeiro tradicional e o futuro
            descentralizado, oferecendo soluções inovadoras que empoderam
            indivíduos e empresas a ter controle total sobre seus ativos
            digitais.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
