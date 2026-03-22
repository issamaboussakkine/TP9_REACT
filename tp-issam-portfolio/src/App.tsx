import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Portfolio Issam</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Badge>React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind</Badge>
          </div>
          <Input placeholder="Votre email" />
          <Button className="w-full">Commencer</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
